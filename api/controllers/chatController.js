require("dotenv").config();
const OpenAI = require("openai")
const client = new OpenAI();
const admin = require("../utils/firebaseServer");
const jwt = require("jsonwebtoken");
const { FieldValue } = admin.firestore;

exports.OpenAI = async (req, res) => {
  try{
  const message = req.body.message
  const context = req.body.context || []

  const token = req.cookies.jwt;
  const data = jwt.verify(token, process.env.JWT_SECRET);
  const userDoc = await admin.firestore().collection("users").doc(data.uid).get();
  const userData = userDoc.data();

  if (userData.plan==="free"&&userData.daily_requests>=5){
    return res.status(400).json({
      message: "You’ve reached your daily limit of 5 requests. Upgrade your plan to continue."
    });
  }
  else{
  await admin.firestore().collection("users").doc(data.uid).update({daily_requests: FieldValue.increment(1), total_requests: FieldValue.increment(1)});

  const response = await client.responses.create({
    model: "o3-mini",
    input: [
      {
        role: "system",
        content:
          "Return only valid html components with Tailwind styling. Do not include any boilerplate code, imports, or wrappers—just the html and styling.",
      },

      ...context
        .filter(Boolean)
        .map((content, i) => ({
          role: i % 2 === 0 ? "user" : "assistant",
          content,
        })),

      { role: "user", content: message },
    ],
  })

  res.json({ code: response.output_text })
  }
  }catch (error){
    console.log(error)
    return res.status(400).json({
      message: error.message,
    });
  }
}
