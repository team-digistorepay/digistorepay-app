import { useEffect } from "react";
import classes from "./StepReferral.module.css";

const StepReferral = ({ formik }) => {
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    handleSubmit,
    setFieldValue,
    touched,
  } = formik;

  const handleReferredBy = (event) => {
    const value = event.target.value === "true";
    setFieldValue("referredBy", value);
  };

  return (
    <div className={classes.mainContainer}>
      <p className={classes.heading}>Referral Details</p>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div id={classes.styledInput} className={classes.radioContainer}>
          <p className={classes.subHeadings}>Do u have a referral?</p>
          <label className={classes.radioLabel}>
            <input
              type="radio"
              name="referredBy"
              value="true"
              checked={values.referredBy === true}
              onChange={handleReferredBy}
            ></input>{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="referredBy"
              value="false"
              checked={values.referredBy === false}
              onChange={handleReferredBy}
            ></input>{" "}
            No
          </label>
        </div>
        {values.referredBy && (
          <>
            <label
              htmlFor="referredFranchiseName"
              className={classes.labelStyle}
            >
              Franchise Name
            </label>
            <input
              id="referredFranchiseName"
              className={classes.styledInput}
              name="referredFranchiseName"
              value={values.referredFranchiseName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Franchise Name"
            ></input>
            {/* {errors.accountName && touched.accountName && (
          <p id={classes.errors}>{errors.accountName}</p>
        )} */}
            <label
              htmlFor="referredFranchiseCode"
              className={classes.labelStyle}
            >
              Franchise Code
            </label>
            <input
              id="referredFranchiseCode"
              className={classes.styledInput}
              name="referredFranchiseCode"
              value={values.referredFranchiseCode}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Franchise Code"
            ></input>
            {/* {errors.accountName && touched.accountName && (
          <p id={classes.errors}>{errors.accountName}</p>
        )} */}
          </>
        )}

        {values.onBoardedBy !== "itsSelf" && (
          <>
            <p className={classes.subHeadings}>Onboarded By :</p>
            <label htmlFor="onBoardedPersonName" className={classes.labelStyle}>
              Onboarder Name
            </label>
            <input
              id="onBoardedPersonName"
              className={classes.styledInput}
              name="onBoardedPersonName"
              value={values.onBoardedPersonName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Onboarder Name"
            ></input>
            {/* {errors.accountName && touched.accountName && (
          <p id={classes.errors}>{errors.accountName}</p>
        )} */}
            <label htmlFor="onBoardedPersonId" className={classes.labelStyle}>
              Onboarder Id
            </label>
            <input
              id="onBoardedPersonId"
              className={classes.styledInput}
              name="onBoardedPersonId"
              value={values.onBoardedPersonId}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Onboarder Id"
            ></input>
            {/* {errors.accountName && touched.accountName && (
          <p id={classes.errors}>{errors.accountName}</p>
        )} */}
          </>
        )}
      </form>
    </div>
  );
};

export default StepReferral;
