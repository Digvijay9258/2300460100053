const express = require("express");
const cors = require("cors");
const Log = require("../logging_middleware/logger");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    await Log(
      "backend",
      "info",
      "route",
      "Home route called"
    );

    res.json({
      message: "Welcome to the Notification Service!",
      status: "success",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Logging failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});