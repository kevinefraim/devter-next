const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.json({ name: "kevin", age: 19 }));
router.get("/test", (req, res) => res.end("API TEST"));

module.exports = router;
