import JWT from "jsonwebtoken";

export const Sign_Access_JWT = (obj) => {
  const token = JWT.sign(obj, process.env.Access_Secret_Key, {
    expiresIn: "30m",
  });
  return token;
};

export const Verify_Access_JWT = () => {
  //todo
};
export const Refresh_Access_JWT = () => {
  //todo
};
export const Verify_Refresh_JWT = () => {
  //todo
};
