const admin = require("firebase-admin");

const serviceAccountKey = JSON.parse(
  Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, "base64").toString("utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

module.exports = admin;
