import TransactionSchema from "./TransactionSchema.js";

export const insertTransaction = (obj) => {
  return TransactionSchema(obj).save();
};

export const getTransaction = (email) => {
  return TransactionSchema.findOne({ email });
};

export const updateTransaction = (_id) => {
  return TransactionSchema.findByIdAndUpdate({_id});
};

export const deleteTransaction = (obj) => {
  return TransactionSchema.findByIdAndDelete(obj);
};
