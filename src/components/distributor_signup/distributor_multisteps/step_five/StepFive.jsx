import React from "react";
import Button from "../../../button/Button";
import axios from "axios";
import toast from "react-hot-toast";
import classes from "./StepFive.module.css";

const StepFive = ({ formik }) => {
  const { values } = formik;

  const {
    distributorName,
    name,
    mobileNumber,
    email,
    password,
    gender,
    dateOfBirth,
    distributorAddressLine1,
    distributorAddressLine2,
    state,
    pinCode,
    district,
    accountNumber,
    accountName,
    bankName,
    ifscCode,
    adhaarNumber,
    panNumber,
    referredBy,
    onBoardedBy,
    onBoardedPersonId,
    onBoardedPersonName,
  } = values;

  const createDistributor = async () => {
    try {
      const res = await axios.post("/distributor/registerDistributor", values);

      if (res.data.error) {
        toast.error(res.data.message, {
          id: "distributor",
        });
      } else {
        toast.success("Distributor created", {
          id: "distributor",
        });
      }
    } catch (error) {
      toast.error(error.message, {
        id: "distributor",
      });
    }
  };

  return (
    <div className={classes.mainContainer}>
      <p className={classes.heading}>Confirm Your Details</p>
      <div>
        <p id={classes.styledInput}>
          <strong>Distributor Name:</strong> {distributorName}
        </p>
        <p id={classes.styledInput}>
          <strong>Name:</strong> {name}
        </p>
        <p id={classes.styledInput}>
          <strong>Mobile Number:</strong> {mobileNumber}
        </p>
        <p id={classes.styledInput}>
          <strong>Email:</strong> {email}
        </p>
        <p id={classes.styledInput}>
          <strong>Password:</strong> {password}
        </p>
        <p id={classes.styledInput}>
          <strong>Gender:</strong> {gender}
        </p>
        <p id={classes.styledInput}>
          <strong>Date of birth:</strong> {dateOfBirth.toString()}
        </p>

        <p id={classes.styledInput}>
          <strong>Distributor Address Line 1:</strong> {distributorAddressLine1}
        </p>
        <p id={classes.styledInput}>
          <strong>Distributor Address Line 2:</strong> {distributorAddressLine2}
        </p>
        <p id={classes.styledInput}>
          <strong>State:</strong> {state}
        </p>
        <p id={classes.styledInput}>
          <strong>Pin Code:</strong> {pinCode}
        </p>
        <p id={classes.styledInput}>
          <strong>District:</strong> {district}
        </p>

        <p id={classes.styledInput}>
          <strong>Account Number:</strong> {accountNumber}
        </p>
        <p id={classes.styledInput}>
          <strong>Account Name:</strong> {accountName}
        </p>
        <p id={classes.styledInput}>
          <strong>Bank:</strong> {bankName}
        </p>

        <p id={classes.styledInput}>
          <strong>IFSC Code:</strong> {ifscCode}
        </p>
        <p id={classes.styledInput}>
          <strong>Aadhaar Number:</strong> {adhaarNumber}
        </p>
        <p id={classes.styledInput}>
          <strong>PAN Number:</strong> {panNumber}
        </p>
        <p id={classes.styledInput}>
          <strong>Referral:</strong> {referredBy ? "Yes" : "No"}
        </p>

        <p id={classes.styledInput}>
          <strong>onBoarded By:</strong>{" "}
          {onBoardedBy === "itsSelf" ? "Self" : onBoardedBy}
        </p>
        {onBoardedBy !== "itsSelf" && (
          <>
            <p id={classes.styledInput}>
              <strong>onBoarded Person Id:</strong> {onBoardedPersonId}
            </p>
            <p id={classes.styledInput}>
              <strong>onBoarded Person Name:</strong> {onBoardedPersonName}
            </p>
          </>
        )}

        {/* <div>
            <input
              type="checkbox"
              value="true"
              name="acknowledgment"
              id="acknowledgment"
            />
            <label htmlFor="acknowledgment">
              I acknowledge the details are correct
            </label>
          </div> */}

        <div className={classes.btn}>
          <Button
            clickEvent={() => createDistributor()}
            btnName="Confirm"
            btnType="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default StepFive;
