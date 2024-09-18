import UserSchema from "./UserSchema.js";

// c

export const addUser = (userObj) => {
  return UserSchema(userObj).save();
};

// r
export const getUser = (email) => {
  return UserSchema.findOne({ email });
};

// u

// d
