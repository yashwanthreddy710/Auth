const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

router.get("/dashboard", auth, (req, res) => {
    res.json({
        message: "Welcome to your dashboard",
        user: req.user 
    });
});

module.exports = router;