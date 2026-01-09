const { onSchedule } = require("firebase-functions/v2/scheduler");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.resetDailyRequests = onSchedule(
  {
    schedule: "0 0 * * *", // midnight
    timeZone: "America/Chicago",
  },
  async () => {
    console.log("Resetting daily_requests for all users...");

    const snapshot = await db.collection("users").get();

    let batch = db.batch();
    let count = 0;

    for (const doc of snapshot.docs) {
      batch.update(doc.ref, { daily_requests: 0 });
      count++;

      if (count % 500 === 0) {
        await batch.commit();
        batch = db.batch();
      }
    }

    if (count % 500 !== 0) {
      await batch.commit();
    }

    console.log(`Reset daily_requests for ${count} users`);
  }
);
