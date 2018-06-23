const router = require("express").Router();
const nytController = require("../../controllers/nytController");

router.route("/")
  .get(nytController.findAll)
  .post(nytController.create);

router
  .route("/:id")
  .get(nytController.findById)
  .put(nytController.update)
  .delete(nytController.remove);

module.exports = router;