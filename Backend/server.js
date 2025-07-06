require("dotenv").config(); // ✅ Load environment variables from .env

const app = require("./src/app"); // ✅ Import the Express app

const PORT = process.env.PORT || 3000; // ✅ Use PORT from .env or default to 3000

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
