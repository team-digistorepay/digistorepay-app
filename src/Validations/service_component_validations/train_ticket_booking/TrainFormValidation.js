import * as yup from "yup";

const phoneRegex = /^[6-9]{1}[0-9]{9}$/;

export const trainFormSchema = yup.object().shape({
  customer_name: yup
    .string()
    .min(3, "Atleast 3 characters needed")
    .required("Please enter a name"),
  mobile: yup
    .string()
    .matches(phoneRegex, "Please enter a valid mobile number")
    .required("Mobile number is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  boarding: yup.string().required("Please enter your boarding station"),
  destination: yup.string().required("Please enter your destination"),
  train_number: yup.string(),
  preference: yup.string(),
  total_passengers: yup
    .number()
    .positive("Minimum of 1 passenger required")
    .integer("Total passengers cannot be decimal")
    .max(5, "One user can only book maximum 5 passengers")
    .required("Total no. of passengers required"),
  passengers: yup.array("Atleast one passenger detail required").of(
    yup.object().shape({
      name: yup
        .string()
        .min(3, "Atleast 3 characters needed")
        .required("Please enter a name"),
      age: yup
        .number()
        .positive("Age cannot be negative")
        .integer("Age cannot be decimal")
        .required("Age is required"),
      gender: yup.string().required("Gender is required"),
    })
  ),
});
