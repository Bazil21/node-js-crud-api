const {
  createUser,
  deleteUsers,
  getUserById,
  updateUsers,
  getUsers
} = require("./user.controller");

const router = require("express").Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.patch("/", updateUsers);
router.delete("/", deleteUsers);





module.exports = router;
