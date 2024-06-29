import React from "react";
import { FaUserAlt } from "react-icons/fa";
import Button from "../../components/button/Button";
import classes from "./ForgotPage.module.css";
import forgotIMG from "../../assets/forgotPW.svg";
import { useFormik } from "formik";
import { userSchema } from "../../Validations/forgot/ForgotValidation";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ForgotPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const onSubmit = () => {
    console.log("submitted");
  };

  const onChangeEmailOrPhone = (event) => {
    setFieldValue("username", event.target.value, true);
    let email = event.target.value.includes("@");
    if (email) {
      setFieldValue("isEmailValue", true);
    } else {
      setFieldValue("isEmailValue", false);
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      isEmailValue: false,
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return currentUser ? (
    <Navigate to="/profile" />
  ) : (
    <>
      <section className={classes.container}>
        <div className={classes.imageContainer}>
          <img src={forgotIMG} />
        </div>
        <div className={classes.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={classes.header}>
              <p className={classes.lineone}>Forgot Password?</p>
              <p className={classes.linetwo}>Let us help you</p>
            </div>

            <div className={classes.inputs}>
              <label>Username</label>
              <div className={classes.input}>
                <span>
                  <FaUserAlt />
                </span>
                <input
                  id="username"
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={onChangeEmailOrPhone}
                  type="text"
                  placeholder="Enter Email or Phone Number"
                />
              </div>
              {errors.username && touched.username ? (
                <p>{errors.username}</p>
              ) : (
                ""
              )}
            </div>

            <div className={classes.btnContainer}>
              <Button btnType="submit" btnName="Reset Password"></Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgotPage;
