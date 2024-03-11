const {
  create,
  getUsers,
  getUserById,
  updateUsers,
  deleteUsers,
} = require("./user.service");
const { hashSync, genSaltSync } = require("bcrypt");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    console.log("Request body:", body);
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
          error: err,
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);1
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
          error: err,
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
