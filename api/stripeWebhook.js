const admin = require("./utils/firebaseServer");
const stripe = new (require("stripe"))(process.env.STRIPE_SECRET_KEY);

const db = admin.firestore();

exports.stripeWebhook = async (req, res) => {
  console.log(req.body.toString());
  const sig = req.headers["stripe-signature"];
  let event;

  // Verify webhook signature
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Stripe signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle event
  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object);
        break;

      case "customer.subscription.updated":
        await handleSubscriptionUpdated(event.data.object);
        break;

      case "customer.subscription.deleted":
        await handleSubscriptionCanceled(event.data.object);
        break;

      case "invoice.payment_failed":
        await handlePaymentFailed(event.data.object);
        break;

      default:
        console.log("Unhandled event type:", event.type);
    }

    res.json({ received: true });
  } catch (err) {
    console.error("Webhook handler failed:", err);
    res.status(500).send("Webhook handler failed");
  }
};


async function handleCheckoutCompleted(session) {
  const email =
    session.customer_details?.email ||
    session.customer_email;

  if (!email) return;

  const snap = await db
    .collection("users")
    .where("email", "==", email)
    .limit(1)
    .get();

  if (snap.empty) return;

  await snap.docs[0].ref.update({
    plan: "pro",
    stripeCustomerId: session.customer,
    subscriptionId: session.subscription,
  });
}


async function handleSubscriptionUpdated(subscription) {
  const customerId = subscription.customer;

  const snap = await db
    .collection("users")
    .where("stripeCustomerId", "==", customerId)
    .limit(1)
    .get();

  if (snap.empty) return;

  const isActive =
    subscription.status === "active" ||
    subscription.status === "trialing";

  await snap.docs[0].ref.update({
    plan: isActive ? "pro" : "free",
  });
}


async function handleSubscriptionCanceled(subscription) {
  const customerId = subscription.customer;

  const snap = await db
    .collection("users")
    .where("stripeCustomerId", "==", customerId)
    .limit(1)
    .get();

  if (snap.empty) return;

  await snap.docs[0].ref.update({
    plan: "free",
  });
}


async function handlePaymentFailed(invoice) {
  const customerId = invoice.customer;

  const snap = await db
    .collection("users")
    .where("stripeCustomerId", "==", customerId)
    .limit(1)
    .get();

  if (snap.empty) return;

  await snap.docs[0].ref.update({
    plan: "free",
  });
}
