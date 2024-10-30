import express from "express";
import {
  deleteTransaction,
  getTransaction,
  insertTransaction,
} from "../models/transactionModels/TransactionModal.js";

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
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

transactionRouter.get("/", async (req, res) => {
  try {
    const { _id } = req.userInfo;
    console.log(req.userInfo);

    const transactions = await getTransaction(_id);
    res.json({
      status: "success",
      message: "Here are the transactions",
      transactions,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

//delete transactions
transactionRouter.delete("/", async (req, res) => {
  try {
    //receive id/ids from the frontend to be deleted
    const ids = req.body;
    const { _id } = req.userInfo;
    console.log(ids, _id);
    //response from server after deleting
    const result = await deleteTransaction(_id, ids);
    res.json({
      status: "success",
      message: result.deletedCount + " Transaction has been deleted",
    });
    const {} = req.body;
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
export default transactionRouter;
