const jwt = require("jsonwebtoken");
const admin = require("../utils/firebaseServer");

exports.Signup = async (req, res) => {
  const name = req.body.name
  const email = req.body.email;
  const password = req.body.password

  const userRecord = await admin.auth().createUser({
    email: email,
    password: password,
    displayName: name,
  });

  await admin.firestore().collection("users").doc(userRecord.uid).set({
    email: email,
    plan: "free",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    saved: [],
    total_requests: 0,
    daily_requests: 0,
    name: name,
  });

  const payload = {
    email: email,
    displayName: name,
    saved: [],
    plan:"free",
    uid: userRecord.uid
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    domain: process.env.COOKIE_URL,
    maxAge: 1000 * 60 * 60 * 24 *30,
    path: "/"
  });

  res.status(200).json({ redirect: process.env.APP_URL });
}

exports.Login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email:email, password:password})
  });
  const data = await response.json();

  const userDoc = await admin.firestore().collection("users").doc(data.localId).get();
  const userData = userDoc.data();

  const payload = {
    email: email,
    displayName: userData.name,
    saved: userData.saved,
    plan:userData.plan,
    uid: data.localId
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    domain: process.env.COOKIE_URL,
    maxAge: 1000 * 60 * 60 * 24 *30,
    path: "/"
  });

  res.status(200).json({ redirect: process.env.APP_URL });
}

exports.GetUser = async (req, res) => {
  const token = req.cookies.jwt;
  const data = jwt.verify(token, process.env.JWT_SECRET);
  const userDoc = await admin.firestore().collection("users").doc(data.uid).get();
  const userData = userDoc.data();
  res.status(200).json({user:userData});
}

exports.OAuth = async (req, res) => {
  const oAuthToken = req.body.oAuthToken;
  const decoded = await admin.auth().verifyIdToken(oAuthToken);
  const userDoc = await admin.firestore().collection("users").doc(decoded.uid).get();
  const userData = userDoc.data();
  console.log(userData)
  let payload;
  if (userData === undefined){
    await admin.firestore().collection("users").doc(decoded.user_id).set({
      email: decoded.email,
      plan: "free",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      saved: [],
      total_requests: 0,
      daily_requests: 0,
      name: decoded.name,
    });
    payload = {
      email: decoded.email,
      displayName: decoded.name,
      saved: [],
      plan: "free",
      uid: decoded.user_id
    }
  }else{
  payload = {
    email: userData.email,
    displayName: userData.name,
    saved: userData.saved,
    plan:userData.plan,
    uid: decoded.user_id
  };
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    domain: process.env.COOKIE_URL,
    maxAge: 1000 * 60 * 60 * 24 *30,
    path: "/"
  });

  res.status(200).json({ redirect: process.env.APP_URL });
}