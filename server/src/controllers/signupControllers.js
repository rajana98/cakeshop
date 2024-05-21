const Users = require("../models/Users");
const bcrypt = require("bcrypt");

const PostSignup = async (req, res) => {
  console.log(req.body, "req.body");
  try {
    const hash = await bcrypt.hashSync(req.body.password, 10);
    Users.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        req.body.password = hash;
        const userData = Users.create(req.body);
        if (userData) {
          res.status(200).json({ msg: "user is added" });
        } else {
          res.status(401).json({ msg: "something went worng" });
        }
      } else {
        res.status(409).json({ error: "user already exists" });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.PostSignup = PostSignup;
