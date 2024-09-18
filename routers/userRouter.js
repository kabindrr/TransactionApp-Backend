import express from "express";
import { addUser, getUser } from "../models/UserModal.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { Sign_Access_JWT } from "../utils/jwt.js";

const router = express.Router();

// user signup
router.post("/", async (req, res) => {
  try {
    // encrypt the password
    req.body.password = hashPassword(req.body.password);
    console.log(req.body.password);

    const user = await addUser(req.body);

    user?._id
      ? res.json({
          user,
          status: "success",
          message: "User registered successfully",
        })
      : res.json({
          status: "error",
          message: "User Registration Failed",
        });
  } catch (error) {
    let msg = error.message;
    if (msg.includes("E11000 duplicate key error collection")) {
      msg =
        "Email Address already exists please try again with different email";
    }
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// user login

router.post("/login", async (req, res, next) => {
  try {
    //receive email and password
    const { email, password } = req.body;

    //find the user by email
    const user = await getUser(email);
    //verify the password
    if (user?._id) {
      const isPasswordCorrect = comparePassword(password, user.password);
      if (isPasswordCorrect) {
        //create token
        const jwtToken = Sign_Access_JWT({ email: email });

        user.password = undefined;
        //user authenticated
        if (email && password) {
          res.json({
            status: "success",
            message: "Login success",
            user,
            jwtToken,
          });
          return;
        }
      }
    }

    res.status(401).json({
      error: "Invalid email and password",
    });

    //jwt and store the jwt in db then return the user {} with jwt token
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

//user profile

export default router;
