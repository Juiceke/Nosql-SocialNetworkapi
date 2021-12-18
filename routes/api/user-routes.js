const router = require("express").Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  deletefriend,
} = require("../../controllers/UserController");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:Userid/friends/:Friendid").post(addFriend).delete(deletefriend);

module.exports = router;
