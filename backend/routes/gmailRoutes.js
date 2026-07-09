const express = require("express");
const router = express.Router();

const {
    loginGmail,
    composeMail
} = require("../browser/gmail");

router.get("/login", async (req, res) => {

    try {

        const result = await loginGmail(
            process.env.GMAIL_EMAIL,
            process.env.GMAIL_PASSWORD
        );

        res.json(result);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

router.get("/compose", async (req, res) => {

    try {

        const result = await composeMail();

        res.json(result);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

module.exports = router;