const router = require("express").Router();
const {
  getallThoughts,
  createThought,
  getThoughtById,
  updateThought,
  deletethought,
  createReaction,
  deleteReaction,
} = require("../../controllers/ThoughtController");

router.route("/").get(getallThoughts).post(createThought);

router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deletethought);

router
  .route("/:thoughtId/reactions")
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
