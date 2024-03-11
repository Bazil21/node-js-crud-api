const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `Insert into users (fname,lname,gender,email,password,phone) values(?,?,?,?,?,?)`,
      [
        data.fname,
        data.lname,
        data.gender,
        data.email,
        data.password,
        data.phone,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUsers: (callback) => {
    pool.query(`Select * From users`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getUserById: (id, callback) => {
    pool.query(
      `Select * From users where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateUsers: (data, callback) => {
    pool.query(
      `Update users set fname=?,lname=?,gender=?,email=?,password=?,phone=? where id = ?`,
      [
        data.fname,
        data.lname,
        data.gender,
        data.email,
        data.password,
        data.phone,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  deleteUsers: (data, callback) => {
    pool.query(
      `Delete From users where id = ?`,
      [
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
