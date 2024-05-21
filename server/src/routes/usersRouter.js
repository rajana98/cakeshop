const express = require("express");
const router = express.Router();

const signupControllers=require("../controllers/signupControllers")
const loginControllers=require("../controllers/loginControllers")
const userControllers=require("../controllers/userControllers")
const uploadProfilePicture=require("../middlewares/uploadProfilePicture")


router.post('/profile',uploadProfilePicture.upload, userControllers.PostProfile )

router.get("/users/:id",userControllers.GetUserById);

router.post("/signup",signupControllers.PostSignup)

router.post("/login",loginControllers.PostLogin );

router.get("/users", userControllers.GetUsers);

router.put("/changePassword",userControllers.ChangePassword)

module.exports = router;