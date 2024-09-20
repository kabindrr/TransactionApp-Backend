import UserSchema from "./UserSchema.js";

// c

export const addUser = (userObj) => {
  return UserSchema(userObj).save();
};

// r
export const getUser = (email) => {
  console.log("EMAIL", email);
  return UserSchema.findOne({ email });
};

// u

// d
