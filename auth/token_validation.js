const jwt = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.header("x-auth-token");
    if (token) {
      // Remove bearer from string
    //   token = token.slice(7);
      jwt.verify(token, process.env.JSON_TOKEN, (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token",
          });
        } else {
          (req.decoded = decoded), next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User",
      });
    }
  },
};
