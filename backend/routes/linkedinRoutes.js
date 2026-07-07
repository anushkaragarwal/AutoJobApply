const express = require("express");
const router = express.Router();

const {
    loginLinkedIn,
    searchJobs
} = require("../browser/linkedin");

router.get("/login", async (req, res) => {
    try {
        const result = await loginLinkedIn(
            process.env.LINKEDIN_EMAIL,
            process.env.LINKEDIN_PASSWORD
        );

        res.json(result);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
});
router.get("/search", async (req, res) => {

    try {

        const keyword = req.query.keyword || "Java Developer Contract";

        const result = await searchJobs(keyword);

        res.json(result);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

module.exports = router;
