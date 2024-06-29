import React from "react";
import classes from "./LoginPage.module.css";
import loginImage from "../../assets/signup.jpg";
import Form from "../../components/form/Form";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? (
    <Navigate to="/profile" />
  ) : (
    <>
      <section className={classes.container}>
        <div className={classes.imageContainer}>
          <img className={classes.responsiveImage} src={loginImage} />
        </div>
        <div className={classes.formContainer}>
          <Form></Form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
