import { useState } from "react";
import classes from "./StepFive.module.css";
import Button from "../../../components/button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StepFive = ({ formik }) => {
  const [loading, setLoading] = useState(false);
  const { values } = formik;

  const {
    franchiseName,
    ownerName,
    phoneNumber,
    email,
    password,
    gender,
    dateOfBirth,
    businessType,
    franchiseAddressLine1,
    franchiseAddressLine2,
    state,
    pinCode,
    district,
    postOffice,
    panchayath,
    ward,
    accountNumber,
    accountName,
    bank,
    branchName,
    ifscCode,
    aadhaarNumber,
    panNumber,
    panCenter,
    digitalElements,
    referredBy,
    referredFranchiseName,
    referredFranchiseCode,
    onBoardedBy,
    onBoardedPersonId,
    onBoardedPersonName,
  } = values;

  const navigate = useNavigate();

  const createFranchisee = async () => {
    const formData = new FormData();

    // Append each field to the FormData object
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        if (Array.isArray(values[key])) {
          // If the field is an array, append each element individually
          values[key].forEach((element, index) => {
            formData.append(`${key}[${index}]`, element);
          });
        } else {
          // Append other fields normally
          formData.append(key, values[key]);
        }
      }
    }

    console.log("formDta", formData);
    try {
      setLoading(true);
      const res = await axios.post("/franchiseRouter/creatFranchise", formData);

      if (res.data.error) {
        setLoading(false);
        toast.error(res.data.message, {
          id: "franchisee",
        });
      } else {
        setLoading(false);
        navigate("/login");
        toast.success("Franchisee created", {
          id: "franchisee",
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message, {
        id: "franchisee",
      });
    }
  };

  return (
    <div className={classes.mainContainer}>
      <p className={classes.heading}>Confirm Your Details</p>
      <div>
        <p id={classes.styledInput}>
          <strong>Franchisee Name:</strong> {franchiseName.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Owner Name:</strong> {ownerName.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Phone Number:</strong> {phoneNumber}
        </p>
        <p id={classes.styledInput}>
          <strong>Email:</strong> {email}
        </p>
        <p id={classes.styledInput}>
          <strong>Password:</strong> {password}
        </p>
        <p id={classes.styledInput}>
          <strong>Gender:</strong> {gender.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Date of birth:</strong> {dateOfBirth.toString()}
        </p>
        <p id={classes.styledInput}>
          <strong>Business Type:</strong> {businessType.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Franchise Address Line 1:</strong>{" "}
          {franchiseAddressLine1.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Franchise Address Line 2:</strong>{" "}
          {franchiseAddressLine2.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>State:</strong> {state.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Pin Code:</strong> {pinCode}
        </p>
        <p id={classes.styledInput}>
          <strong>District:</strong> {district.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Post Office:</strong> {postOffice.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Panchayath:</strong> {panchayath.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Ward:</strong> {ward.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Account Number:</strong> {accountNumber}
        </p>
        <p id={classes.styledInput}>
          <strong>Account Name:</strong> {accountName.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Bank:</strong> {bank.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>Branch Name:</strong> {branchName.toUpperCase()}
        </p>
        <p id={classes.styledInput}>
          <strong>IFSC Code:</strong> {ifscCode}
        </p>
        <p id={classes.styledInput}>
          <strong>Aadhaar Number:</strong> {aadhaarNumber}
        </p>
        <p id={classes.styledInput}>
          <strong>PAN Number:</strong> {panNumber}
        </p>
        <p id={classes.styledInput}>
          <strong>PAN Center:</strong> {panCenter ? "YES" : "NO"}
        </p>
        <p id={classes.styledInput}>
          <strong>Digital Elements:</strong>{" "}
          {digitalElements.map((element, index) => {
            if (index === 0) return element.toUpperCase();
            else return `, ${element.toUpperCase()}`;
          })}
        </p>
        <p id={classes.styledInput}>
          <strong>Referral:</strong> {referredBy ? "YES" : "NO"}
        </p>
        {referredBy && (
          <>
            <p id={classes.styledInput}>
              <strong>Referral Franchise:</strong>{" "}
              {referredFranchiseName.toUpperCase()}
            </p>
            <p id={classes.styledInput}>
              <strong>Referral Code:</strong> {referredFranchiseCode}
            </p>
          </>
        )}
        <p id={classes.styledInput}>
          <strong>onBoarded By:</strong>{" "}
          {onBoardedBy === "itsSelf" ? "Self" : onBoardedBy.toUpperCase()}
        </p>
        {onBoardedBy !== "itsSelf" && (
          <>
            <p id={classes.styledInput}>
              <strong>onBoarded Person Id:</strong> {onBoardedPersonId}
            </p>
            <p id={classes.styledInput}>
              <strong>onBoarded Person Name:</strong>{" "}
              {onBoardedPersonName.toUpperCase()}
            </p>
          </>
        )}

        <div className={classes.flexContainer}>
          <p id={classes.styledInput}>
            <strong>Aadhaar Front:</strong>{" "}
            <div className={classes.flexItem}>
              <img
                src={
                  values.aadhaarPicFront
                    ? URL.createObjectURL(values.aadhaarPicFront)
                    : "/images/blankImage.webp"
                }
                alt="Default file"
                width="100%"
                height="100%"
              />
            </div>
          </p>
          <p id={classes.styledInput}>
            <strong>Aadhaar Back:</strong>{" "}
            <div className={classes.flexItem}>
              <img
                src={
                  values.aadhaarPicback
                    ? URL.createObjectURL(values.aadhaarPicback)
                    : "/images/blankImage.webp"
                }
                alt="Default file"
                width="100%"
                height="100%"
              />
            </div>
          </p>
          <p id={classes.styledInput}>
            <strong>Passbook:</strong>{" "}
            <div className={classes.flexItem}>
              <img
                src={
                  values.bankPassbookPic
                    ? URL.createObjectURL(values.bankPassbookPic)
                    : "/images/blankImage.webp"
                }
                alt="Default file"
                width="100%"
                height="100%"
              />
            </div>
          </p>
          <p id={classes.styledInput}>
            <strong>Pan Card:</strong>{" "}
            <div className={classes.flexItem}>
              <img
                src={
                  values.panPic
                    ? URL.createObjectURL(values.panPic)
                    : "/images/blankImage.webp"
                }
                alt="Default file"
                width="100%"
                height="100%"
              />
            </div>
          </p>
          <p id={classes.styledInput}>
            <strong>Shop Pic:</strong>{" "}
            <div className={classes.flexItem}>
              <img
                src={
                  values.shopPic
                    ? URL.createObjectURL(values.shopPic)
                    : "/images/blankImage.webp"
                }
                alt="Default file"
                width="100%"
                height="100%"
              />
            </div>
          </p>
        </div>

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
            clickEvent={() => createFranchisee()}
            btnName={loading ? "Creating..." : "Confirm"}
            btnType="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default StepFive;
