import React, { useState } from "react";
import classes from "./Insurance.module.css";
import Button from "../../button/Button";
import { useFormik } from "formik";
import { insuranceSchema } from "../../../Validations/service_component_validations/insurance/insuranceValidation";
import UploadCard from "../../upload_card/UploadCard";
import mobile from "../../../assets/ad/mobile.jpeg";
import AdvertCard from "../../../components/advert_card/AdvertCard";

const Insurance = () => {
  const [insuranceMode, setInsuranceMode] = useState("Online");

  const handleInsuranceMode = (event) => {
    setInsuranceMode(event.target.value);
  };

  const [comState, setComState] = useState(false);
  const [policyState, setPolicyState] = useState(false);

  const onSubmit = () => {
    console.log(values);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: {
      customer_name: "",
      mobile: "",
      email: "",
      insuranceType: "",
    },
    validationSchema: insuranceSchema,
    onSubmit,
  });

  return (
    <>
      <section className={classes.mainContainer}>
        <div className={classes.heading}>
          <p>Insurance</p>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.content}>
            <div id={classes.styledInput} className={classes.radioContainer}>
              <label className={classes.radioLabel}>
                <input
                  type="radio"
                  name="insuranceMode"
                  value="Online"
                  defaultChecked
                  onChange={handleInsuranceMode}
                ></input>{" "}
                Online
              </label>
              <label>
                <input
                  type="radio"
                  name="insuranceMode"
                  value="Offline"
                  onChange={handleInsuranceMode}
                ></input>{" "}
                Offline
              </label>
            </div>

            {insuranceMode === "Offline" ? (
              <div className={classes.offlineContainer}>
                <input
                  id={classes.styledInput}
                  name="customer_name"
                  className={classes.mobile}
                  value={values.customer_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Enter customer name"
                ></input>
                {errors.customer_name && touched.customer_name && (
                  <p id={classes.errors}>{errors.customer_name}</p>
                )}

                <input
                  id={classes.styledInput}
                  name="mobile"
                  className={classes.mobile}
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  placeholder="Enter 10 digit mobile number"
                ></input>
                {errors.mobile && touched.mobile && <p>{errors.mobile}</p>}

                <input
                  id={classes.styledInput}
                  className={classes.mobile}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Enter Email ID"
                />
                {errors.email && touched.email && (
                  <p id={classes.errors}>{errors.email}</p>
                )}

                <select
                  id={classes.styledInput}
                  className={classes.dropdown}
                  value={values.insuranceType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="insuranceType"
                >
                  <option>Select type of Insurance</option>
                  <option>Full cover</option>
                  <option>Bumper to bumper</option>
                  <option>Third party</option>
                  <option>Stand-alone</option>
                </select>
                {errors.insuranceType && touched.insuranceType && (
                  <p id={classes.errors}>{errors.insuranceType}</p>
                )}

                <h3 className={classes.subHeadings}>Upload Documents</h3>

                <UploadCard
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  nameArray={[
                    { name: "RC front", mandatory: true },
                    { name: "RC back", mandatory: true },
                    { name: "Aadhaar Card front", mandatory: true },
                    { name: "Aadhaar Card back", mandatory: true },
                    { name: "PAN", mandatory: false },
                  ]}
                />

                <div className={classes.checkboxContainer}>
                  <label className={classes.subHeadings}>
                    If commerical or type 2 vechicle?{" "}
                    <input
                      type="checkbox"
                      onChange={() => setComState(!comState)}
                    />
                  </label>

                  {comState ? (
                    <UploadCard
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      nameArray={[{ name: "Other Documents", mandatory: true }]}
                    />
                  ) : (
                    ""
                  )}
                </div>

                <div className={classes.checkboxContainer}>
                  <label className={classes.subHeadings}>
                    If Policy expired?{" "}
                    <input
                      type="checkbox"
                      onChange={() => setPolicyState(!policyState)}
                    />
                  </label>

                  {policyState ? (
                    <div>
                      <h3>Upload Vechicle Photos</h3>
                      <UploadCard
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        setFieldValue={setFieldValue}
                        nameArray={[
                          { name: "Front side", mandatory: true },
                          { name: "Back side", mandatory: true },
                          { name: "Left side", mandatory: true },
                          { name: "Right side", mandatory: true },
                          { name: "Engine number", mandatory: true },
                          { name: "Chasis number", mandatory: true },
                        ]}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className={classes.buttonDiv}>
                  <Button btnType="submit" btnName="Proceed"></Button>
                </div>
              </div>
            ) : (
              <div className={classes.onlineContainer}>
                Online Insurance Coming Soon...
              </div>
            )}
          </div>
        </form>
      </section>
      <div style={{ position: "relative" }}>
        <AdvertCard image={mobile} alt="waterAd" sticky={true} />
      </div>
    </>
  );
};

export default Insurance;
