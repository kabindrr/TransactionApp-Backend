import express from "express";
import { addUser } from "../models/UserModal.js";
import { hashPassword } from "../utils/bcrypt.js";

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
          status: "Success",
          message: "User registered successfully",
        })
      : res.json({
          status: "Error",
          message: "User Registration Failed",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// user login

//user profile

export default router;