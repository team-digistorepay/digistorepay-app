import * as yup from "yup";

export const distributorSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, "Must be atleast 2 characters")
    .required("Please enter a name"),
    distributorName: yup.string().min(2).required("Please enter distributor name"),
    distributorAddressLine1: yup.string().required("Please enter your address"),
  state: yup.string().required("Please enter your state name"),
  gender: yup.string().required("Please enter your gender"),
  panchayath: yup.string().required("Please enter your panchayath"),
  ward: yup.string().required("Please enter your ward"),
  accountName: yup.string().required("Please enter your Account name"),
  bankName: yup.string().required("Please enter your bank name"),
  branchName: yup.string().required("Please enter your branch name"),
  businessType: yup.string().required("Please enter your business type"),
  pinCode: yup
    .string()
    .length(6)
    .matches("^[1-9]{1}[0-9]{2}[0-9]{3}$", "Please enter valid pin code")
    .required("Please enter pin code"),
  district: yup.string().required("Please enter your district name"),
  postOffice: yup.string().required("Please enter your post office name"),
  panNumber: yup
    .string()
    .length(10)
    .matches("[A-Z]{5}[0-9]{4}[A-Z]{1}", "Please enter valid PAN number")
    .required("Please enter PAN number"),
  accountNumber: yup
    .string()
    .matches("[0-9]{9,18}", "Please enter valid Account Number")
    .required("Please enter Account number"),
  ifscCode: yup
    .string()
    .matches("[0-9]{9,18}", "Please enter valid Ifsc code")
    .required("Please enter Ifsc code"),
    mobileNumber: yup
    .string()
    .length(10, "Phone number must exactly 10 characters")
    .matches(
      "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
      "Please enter valid 10 digit mobile number"
    )
    .required("Please enter mobile number"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string().min(4).required("Password is required"),
  adhaarNumber: yup
    .string()
    .length(12)
    .matches(
      "^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$",
      "Please enter valid aadhaar number"
    )
    .required("Please enter aadhaar number"),
});
