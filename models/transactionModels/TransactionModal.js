import TransactionSchema from "./TransactionSchema.js";

export const insertTransaction = (obj) => {
  return TransactionSchema(obj).save();
};

export const getTransaction = (userId) => {
  if (!userId) {
    throw new Error("_id is required!");
  }
  return TransactionSchema.find({ userId });
};

export const updateTransaction = (_id) => {
  return TransactionSchema.findByIdAndUpdate({ _id });
};

export const deleteTransaction = (userId, idsToDelete) => {
  return TransactionSchema.deleteMany({ userId, _id: { $in: idsToDelete } });
};
