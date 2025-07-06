const express = require("express");
const cors = require("cors");
const aiRoutes = require("./routes/ai.routes");

const app = express();

// ✅ Define your allowed frontend origin
const allowedOrigins = [
  "https://ai-code-reviewer-frontend-cpsw.onrender.com" // ✅ your deployed frontend
];

// ✅ Apply CORS configuration
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true
  })
);

// ✅ Built-in middleware to parse JSON
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// ✅ API route
app.use("/ai", aiRoutes);

// ✅ Export the app
module.exports = app;
