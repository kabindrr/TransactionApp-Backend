import express from "express";

const transactionRouter = express.Router();

//insert transaction
transactionRouter.post("/", (req, res, next) => {
  try {
    const { _id } = req.userInfo;
    req.body.userId = _id;
    console.log(req.body);
    res.json({
      status: "success",
      message: "Todo transaction",
    });
  } catch (error) {
    console.log(error);
  }
});
export default transactionRouter;
