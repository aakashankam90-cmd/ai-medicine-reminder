const express = require("express");

require("dotenv").config();

const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

// Authentication routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Medicine Reminder Backend is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});