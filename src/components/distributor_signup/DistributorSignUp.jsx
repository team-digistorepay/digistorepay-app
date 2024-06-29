import React from "react";
import classes from "./DistributorSignUp.module.css";
import signupImg from "../../assets/signupImg.svg";
import { useFormik } from "formik";
import { distributorSchema } from "../../Validations/distributor_signup/DistributorValidation";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import MultiStep from "react-multistep";
import StepOne from "./distributor_multisteps/step_one/StepOne";
import StepTwo from "./distributor_multisteps/step_two/StepTwo";
import StepThree from "./distributor_multisteps/step_three/StepThree";
import StepFour from "./distributor_multisteps/step_four/StepFour";
import StepFive from "./distributor_multisteps/step_five/StepFive";
import StepReferral from "../../pages/multistep_form/stepReferral/StepReferral";

const DistributorSignUp = () => {
  const { currentUser } = useSelector((state) => state.user);
  const onSubmit = () => {
    console.log("submitted");
  };

  const formik = useFormik({
    initialValues: {
      distributorName: "",
      name: "",
      mobileNumber: "",
      otp: "",
      email: "",
      password: "",
      gender: "",
      dateOfBirth: "",
      businessType: "",
      distributorAddressLine1: "",
      distributorAddressLine2: "",
      state: "",
      pinCode: "",
      district: "",
      postOffice: "",
      panchayath: "",
      ward: "",
      accountNumber: "",
      accountName: "",
      bankName: "",
      branchName: "",
      ifscCode: "",
      adhaarNumber: "",
      panNumber: "",
      shopPic: "shop_photo.jpg",
      adhaarfrontImage:
        "https://i.pinimg.com/736x/b7/5c/f4/b75cf40f71ae2144151b9b34e8c58380.jpg",
      adhaarBackImage:
        "https://i.pinimg.com/736x/b7/5c/f4/b75cf40f71ae2144151b9b34e8c58380.jpg",
      panCardImage:
        "https://taxguru.in/wp-content/uploads/2017/01/New-pancard-design.png",
      bankPassbook:
        "https://www.paisabazaar.com/wp-content/uploads/2020/05/SBI-Passbook-1024x463.jpg",
      referredBy: false,
      referredFranchiseName: "",
      referredFranchiseCode: "",
      onBoardedBy:
        currentUser && currentUser.data.userType === "distributor"
          ? "distributor"
          : currentUser && currentUser.data.userType === "fieldExecutive"
          ? "fieldExecutive"
          : currentUser && currentUser.data.userType === "admin"
          ? "admin"
          : currentUser && currentUser.data.userType === "teleCaller"
          ? "teleCaller"
          : currentUser && currentUser.data.userType === "collegeQuest"
          ? "collegeQuest"
          : "itsSelf",
      onBoardedPersonId:
        currentUser && currentUser.data.userType === "admin" ? "1" : "",
      onBoardedPersonName:
        currentUser && currentUser.data.userType === "admin" ? "admin" : "",
    },
    validationSchema: distributorSchema,
    onSubmit,
  });

  return (currentUser && currentUser.data.userType === "teleCaller") ||
    (currentUser && currentUser.data.userType === "franchise") ? (
    <Navigate to="/profile" />
  ) : (
    <section className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={signupImg} />
      </div>
      <div className={classes.signupContainer}>
        <div className={classes.formContainer}>
          <div className={classes.header}>
            <p className={classes.lineone}>
              {currentUser ? "Add Distributor" : "Join Us!"}{" "}
            </p>
            {/* <p className={classes.linetwo}>Enter details below</p> */}
          </div>

          <MultiStep
            className={classes.multiContainer}
            activeStep={0}
            prevButton={{
              title: "< Prev",
              style: {
                backgroundColor: "#197bbd",
                color: "white",
                padding: "0.5rem 2rem",
                borderRadius: "15px",
                border: 0,
                margin: "1rem",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
              },
            }}
            nextButton={{
              title: "Next >",
              style: {
                backgroundColor: "#197bbd",
                color: "white",
                padding: "0.5rem 2rem",
                borderRadius: "15px",
                border: 0,
                margin: "1rem",
                fontSize: "1rem",
                fontWeight: "bold",
                float: "right",
                cursor: "pointer",
              },
            }}
            steps={[
              { title: "1", component: <StepOne formik={formik} /> },
              { title: "2", component: <StepTwo formik={formik} /> },
              { title: "3", component: <StepThree formik={formik} /> },
              { title: "4", component: <StepFour formik={formik} /> },
              { title: "5", component: <StepReferral formik={formik}/> },
              { title: "6", component: <StepFive formik={formik} /> },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default DistributorSignUp;
