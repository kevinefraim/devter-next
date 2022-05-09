const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("Hola, bienvenido a mi API"));
router.get("/test", (req, res) => res.end("API TEST"));

module.exports = router;
