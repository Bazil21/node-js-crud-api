const {
  create,
  getUsers,
  getUserById,
  updateUsers,
  deleteUsers,
  userLogin
} = require("./user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const {sign} =  require("jsonwebtoken");
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
        return err;
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUserById: (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if(!results){
        return res.json({
            success:0,
            message:"Record Not Found"
        })
      }
      return res.json({
        success:1,
        data: results
      })
    });
  },
  updateUsers: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUsers(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({
        success: 1,
        data: "updated successfully",
      });
    });
  },
  deleteUsers: (req, res) => {
    const body = req.body;
    deleteUsers(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({
        success: 1,
        data: "Deleted successfully",
      });
    });
  },
  userLogin: (req, res) => {
    const body = req.body;
    userLogin(body.email, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if(!results){
        console.log(results);
        return res.json({
            success: 0,
            data: "Invalid email or password"
          });
      }
      const result  = compareSync(body.password,results.password);

      if(result){
        results.password = undefined;
        const jsontoken = sign({result: results}, "test123",{
            expiresIn: "1h"
        });
        return res.json({
            success: 1,
            data: "Login successfully",
            token:jsontoken
          });
      }else{
        return res.json({
            success: 0,
            data: "Invalid email or password"
          });
      }
      
    });
  },
};
