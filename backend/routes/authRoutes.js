const express = require("express");
const bcrypt = require("bcrypt");

const db = require("../config/db");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    // 1. Check required fields
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Name, email and password are required"
        });
    }

    try {
        // 2. Check if email already exists
        const checkUserSql = "SELECT id FROM users WHERE email = ?";

        db.query(checkUserSql, [email], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: "Database error"
                });
            }

            if (results.length > 0) {
                return res.status(409).json({
                    message: "Email already registered"
                });
            }

            // 3. Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // 4. Insert user
            const insertUserSql = `
                INSERT INTO users (name, email, password, role)
                VALUES (?, ?, ?, ?)
            `;

            db.query(
                insertUserSql,
                [name, email, hashedPassword, "PATIENT"],
                (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({
                            message: "Failed to register user"
                        });
                    }

                    // 5. Success response
                    return res.status(201).json({
                        message: "User registered successfully"
                    });
                }
            );
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;