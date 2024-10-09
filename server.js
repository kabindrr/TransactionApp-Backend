import express from "express";

import cors from "cors";
import morgan from "morgan";
import userRouter from "./routers/userRouter.js";
import { connectMongoDb } from "./config/mongoDb.js";
import transactionRouter from "./routers/transactionRouter.js";
import { auth } from "./middlewares/authMiddleware.js";
const PORT = process.env.PORT || 8001;
const app = express();

//database
connectMongoDb();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/transactions",auth, transactionRouter);

app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Hello from server",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log("Server error")
    : console.log(`server connected at http://localhost:${PORT}`);
});
