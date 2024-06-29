import React from "react";
import classes from "./StepThree.module.css";

const StepThree = ({ formik }) => {
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
      <p className={classes.heading}>Distributor Details</p>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="distributorName" className={classes.labelStyle}>
          Distributor Name
        </label>
        <input
          id="distributorName"
          className={classes.styledInput}
          value={values.distributorName}
          name="distributorName"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Distributor Name"
          type="text"
        />

        {errors.distributorName && touched.distributorName && (
          <p id={classes.errors}>{errors.distributorName}</p>
        )}

        <label htmlFor="distributorAddressLine1" className={classes.labelStyle}>
        Distributor Address Line1
        </label>
        <input
          id="distributorAddressLine1"
          className={classes.styledInput}
          value={values.distributorAddressLine1}
          name="distributorAddressLine1"
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter Address line 1"
        />

        {errors.distributorAddressLine1 && touched.distributorAddressLine1 && (
          <p id={classes.errors}>{errors.distributorAddressLine1}</p>
        )}
        <label htmlFor="distributorAddressLine2" className={classes.labelStyle}>
          Distributor Address Line 2
        </label>
        <input
          id="distributorAddressLine2"
          className={classes.styledInput}
          value={values.distributorAddressLine2}
          name="distributorAddressLine2"
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter Address line 2"
        />

        {errors.distributorAddressLine2 && touched.distributorAddressLine2 && (
          <p id={classes.errors}>{errors.distributorAddressLine2}</p>
        )}
        <label htmlFor="state" className={classes.labelStyle}>
          State
        </label>
        <select
          className={classes.dropdown}
          id="state"
          value={values.state}
          name="state"
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option>Select State</option>
          <option key="Kerala" value="Kerala">
            Kerala
          </option>
          <option key="Tamilnadu" value="Tamilnadu">
            Tamilnadu
          </option>
          <option key="Karnataka" value="Karnataka">
            Karnataka
          </option>
        </select>

        {errors.state && touched.state && (
          <p id={classes.errors}>{errors.state}</p>
        )}
        <label htmlFor="district" className={classes.labelStyle}>
          District
        </label>
        <input
          id="district"
          className={classes.styledInput}
          name="district"
          value={values.district}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter District"
        />

        {errors.district && touched.district && (
          <p id={classes.errors}>{errors.district}</p>
        )}
      
        <label htmlFor="pinCode" className={classes.labelStyle}>
          Pin Code
        </label>
        <input
          id="pinCode"
          className={classes.styledInput}
          name="pinCode"
          value={values.pinCode}
          onChange={handleChange}
          onBlur={handleBlur}
          type="number"
          placeholder="Enter Pin code"
        />

        {errors.pinCode && touched.pinCode && (
          <p id={classes.errors}>{errors.pinCode}</p>
        )}
      </form>
    </div>
  );
};

export default StepThree;
