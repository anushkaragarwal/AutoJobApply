const emailRoutes = require("./routes/emailRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Routes
const linkedinRoutes = require("./routes/linkedinRoutes");
const gmailRoutes = require("./routes/gmailRoutes");

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 AutoJobApply Backend is Running...");
});

// API Routes
app.use("/linkedin", linkedinRoutes);
app.use("/email", emailRoutes);
app.use("/gmail", gmailRoutes);

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
