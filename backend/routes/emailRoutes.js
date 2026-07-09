const express = require("express");
const router = express.Router();

const { sendMail } = require("../browser/email");

router.get("/send", async (req, res) => {

    try {

        const email = req.query.email;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required"
            });
        }

        const result = await sendMail(email);

        res.json(result);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

module.exports = router;