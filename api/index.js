const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const chatRoutes = require("./routes/chatRoutes");
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
const { stripeWebhook } = require("./stripeWebhook")

require("dotenv").config();

app.post(
  "/webhook/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin:[process.env.APP_URL,process.env.LANDER_URL],
  credentials: true        
}));

app.use("/chat", chatRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5001");
});
