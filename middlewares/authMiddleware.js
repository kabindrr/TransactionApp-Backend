import { getUser } from "../models/UserModal.js";
import { Verify_Access_JWT } from "../utils/jwt.js";

export const auth = async (req, res, next) => {
  try {
    //2. create auth middleware

    //2.2 get user email from the token

    const { authorization } = req.headers;
    const result = Verify_Access_JWT(authorization);
    console.log(result);
    //2.1 validate if the token is valid
    if (result?.email) {
      //2.2 get user email from the token
      const user = await getUser(result.email);
      if (user?._id) {
        //2.3 get user by email
        //store user info in the req headers
        user.password = undefined;
        req.userInfo = user;
        return next();
      }
    }
    res.status(403).json({
      error: "Unauthorized",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
