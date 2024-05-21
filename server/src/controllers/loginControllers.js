const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PostLogin = async (req, res) => {
  const user = await Users.findOne({
    phoneNumber: req.body.phoneNumber,
  }).lean();
  if (user) {
    console.log(user, "user");
    try {
      const { phoneNumber, password } = user;
      const isMatched = await bcrypt.compareSync(req.body.password, password);
      if (phoneNumber && isMatched) {
        const token = await jwt.sign(
          { phoneNumber: req.body.phoneNumber },
          process.env.SECRET_TOKEN
        );
        user.token = token;
        const { password, ...refactoredUserObj } = user;
        res.status(200).json({
          msg: "logged in successfully",
          isLogedin: true,
          userData: refactoredUserObj,
        });
      } else {
        res.status(401).json({
          errorMsg: "unauthorized user",
        });
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    res.json({
      errorMsg: "user doesn't exist",
    });
  }
};

exports.PostLogin = PostLogin;
