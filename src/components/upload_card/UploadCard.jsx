import { useState } from "react";
import { toast } from "react-hot-toast";
import classes from "./UploadCard.module.css";

const UploadCard = ({ nameArray, handleBlur, setFieldValue }) => {
  const handleFileChange = async (event, fieldName) => {
    const { files } = event.target;
    if (files) {
      setFieldValue(fieldName, files[0]);
      toast.success("Upload Successful", {
        id: "imgUpload",
      });
    } else {
      toast.error(error.message || "Something went wrong", {
        id: "imgUpload",
      });
    }
  };

  return (
    <div>
      {nameArray.map((item, index) => {
        return (
          <div key={index} className={classes.detailSection}>
            {item.mandatory ? (
              <div className={classes.namediv}>{item.name}</div>
            ) : (
              <div className={classes.namediv}>{item.name} (Optional)</div>
            )}
            <label className={classes.input}>
              <input
                name={item.name}
                onChange={(e) => handleFileChange(e, item.fieldName)}
                onBlur={handleBlur}
                type="file"
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default UploadCard;
