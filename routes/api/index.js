const router = require("express").Router();
const userRoutes = require("./users");
const postController = require("../../controllers/postController");
const reviewController = require("../../controllers/reviewController");

router.use("/users", userRoutes)

router.route("/posts")
    .get(postController.find)
    .post(postController.create);

router.route("/reviews")
    .get(reviewController.find)
    .post(reviewController.create);

router.route("/reviews/:id")
    .get(reviewController.find);

module.exports = router;