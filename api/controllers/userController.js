const jwt = require("jsonwebtoken");
const admin = require("../utils/firebaseServer");

const db = admin.firestore();

exports.AddSave = async (req, res) => {
  const saveData = req.body.saveData;
  const code = req.body.code;
  const email = req.body.email;
  const snapshot = await db.collection("users").where("email", "==", email).limit(1).get();
  const userDoc = snapshot.docs[0];
  const userId = userDoc.id;

  await userDoc.ref.update({
    saved: admin.firestore.FieldValue.arrayUnion({
        code: code, 
        data: saveData
    }),
  });
  
  res.status(200).json({message: "Save added successfully"});
}