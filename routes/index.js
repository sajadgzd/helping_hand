const path = require("path");
const router = require("express").Router();
const api = require("./api");

// Load api routes
router.use("/api", api);

module.exports = router;