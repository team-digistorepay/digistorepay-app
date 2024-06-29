import React from 'react'
import classes from './StepFour.module.css'
import UploadCard from '../../../upload_card/UploadCard';


const StepFour = ({formik}) => {
    const {
        handleChange,
        handleBlur,
        values,
        errors,
        handleSubmit,
        setFieldValue,
        touched,
      } = formik;
      return (
        <div className={classes.mainContainer}>
          <p className={classes.heading}>Bank Details</p>
          <form className={classes.form} onSubmit={handleSubmit}>
            <label htmlFor="accountNumber" className={classes.labelStyle}>
              Account Number
            </label>
            <input
              id="accountNumber"
              className={classes.styledInput}
              name="accountNumber"
              value={values.accountNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              placeholder="Enter Account Number"
            ></input>
            {errors.accountNumber && touched.accountNumber && (
              <p id={classes.errors}>{errors.accountNumber}</p>
            )}
            <label htmlFor="accountName" className={classes.labelStyle}>
              Account Name
            </label>
            <input
              id="accountName"
              className={classes.styledInput}
              name="accountName"
              value={values.accountName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Account Name"
            ></input>
            {errors.accountName && touched.accountName && (
              <p id={classes.errors}>{errors.accountName}</p>
            )}
            <label htmlFor="bankName" className={classes.labelStyle}>
            Bank Name
            </label>
            <input
              id="bankName"
              className={classes.styledInput}
              name="bankName"
              value={values.bankName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Bank Name"
            ></input>
            {errors.bankName && touched.bankName && (
              <p id={classes.errors}>{errors.bankName}</p>
            )}
      
            <label htmlFor="ifscCode" className={classes.labelStyle}>
              IFSC Code
            </label>
            <input
              id="ifscCode"
              className={classes.styledInput}
              name="ifscCode"
              value={values.ifscCode}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Ifsc Code"
            ></input>
            {errors.ifscCode && touched.ifscCode && (
              <p id={classes.errors}>{errors.ifscCode}</p>
            )}
            <label htmlFor="adhaarNumber" className={classes.labelStyle}>
              Aadhaar Number
            </label>
            <input
              id="adhaarNumber"
              className={classes.styledInput}
              name="adhaarNumber"
              value={values.adhaarNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              placeholder="Enter Aadhaar Number"
            ></input>
            {errors.adhaarNumber && touched.adhaarNumber && (
              <p id={classes.errors}>{errors.adhaarNumber}</p>
            )}
            <label htmlFor="panNumber" className={classes.labelStyle}>
              Pan Number
            </label>
            <input
              id="panNumber"
              className={classes.styledInput}
              name="panNumber"
              value={values.panNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Pan Number"
            ></input>
            {errors.panNumber && touched.panNumber && (
              <p id={classes.errors}>{errors.panNumber}</p>
            )}
    
            <UploadCard
              handleChange={handleChange}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              nameArray={[
                { name: "Aadhaar pic front", mandatory: true },
                { name: "Aadhaar pic back", mandatory: true },
                { name: "Pan pic", mandatory: true },
                { name: "Bank Passbook Pic", mandatory: true },
                
              ]}
            />
          </form>
        </div>
      );
}

export default StepFour