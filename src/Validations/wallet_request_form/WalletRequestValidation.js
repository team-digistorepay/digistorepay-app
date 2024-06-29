import * as yup from "yup";

// Define reusable regex patterns
const accountNumberRegex = /^[0-9]{9,18}$/;
const upiIdRegex = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;

export const walletRequestSchema = yup.object().shape({
  transactionType: yup.string().required("Please select transaction type"),
  amount: yup
    .number()
    .positive("Amount cannot be negative")
    .required("Please enter an amount"),

  remark: yup.string().max(250, "Maximum only 250 characters allowed"),
  referenceNo: yup.string().when("transactionType", {
    is: "internetBanking",
    then: yup.string().required("Please enter reference number"),
  }),
  fromAcc: yup
    .string()
    .matches(accountNumberRegex, "Please enter a valid account number")
    .when("transactionType", {
      is: "internetBanking",
      then: yup
        .string()
        .matches(accountNumberRegex, "Please enter a valid account number")
        .required("Please enter sender account number"),
    }),
  toAcc: yup
    .string()
    .matches(accountNumberRegex, "Please enter a valid account number")
    .when("transactionType", {
      is: "internetBanking",
      then: yup
        .string()
        .matches(accountNumberRegex, "Please enter a valid account number")
        .required("Please enter receiver account number"),
    }),

  executiveName: yup.string().when("transactionType", {
    is: "executive",
    then: yup.string().required("Please enter executive name"),
  }),
  executiveId: yup.string().when("transactionType", {
    is: "executive",
    then: yup.string().required("Please enter executive ID"),
  }),

  fromUpiId: yup
    .string()
    .matches(upiIdRegex, "Please enter a valid UPI ID")
    .when("transactionType", {
      is: "upi",
      then: yup
        .string()
        .matches(upiIdRegex, "Please enter a valid UPI ID")
        .required("Please enter sender UPI ID"),
    }),
  toUpiId: yup
    .string()
    .matches(upiIdRegex, "Please enter a valid UPI ID")
    .when("transactionType", {
      is: "upi",
      then: yup
        .string()
        .matches(upiIdRegex, "Please enter a valid UPI ID")
        .required("Please enter receiver UPI ID"),
    }),
});
