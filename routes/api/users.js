const router = require("express").Router();
const authController = require("../../controllers/authController");
const messageController = require("../../controllers/messageController");

router.route("/login")
    .post(authController.login);

router.route("/signup")
    .post(authController.signup);

router.route("/:id")
    .get(authController.fetch);

router.route("/:id/chat")
    .get(messageController.find)
    .post(messageController.send);

module.exports = router;