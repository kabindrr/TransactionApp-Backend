import express from "express";
import { insertTransaction } from "../models/transactionModels/TransactionModal.js";

const transactionRouter = express.Router();

//insert transaction
transactionRouter.post("/", async (req, res, next) => {
  try {
    const { _id } = req.userInfo;
    req.body.userId = _id;
    const result = await insertTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New Transaction has been added successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to add new transaction",
        });
  } catch (error) {
    console.log(error);
  }
});
export default transactionRouter;
