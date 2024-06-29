import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import classes from "./Landlinerecharge.module.css";
import Button from "../../button/Button";
import { telephoneBillSchema } from "../../../Validations/service_component_validations/telephone_bill/TelephoneBill";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  paymentStart,
  paymentSuccess,
  paymentFailure,
} from "../../../redux/operators/operatorSlice";
import mobile from "../../../assets/ad/mobile.jpeg";
import AdvertCard from "../../../components/advert_card/AdvertCard";
import BillCard from "../../bill_card/BillCard";
import { fetchOperators } from "../../../utils/fetchOperators";
import { fetchBill } from "../../../utils/fetchBill";
import { fetchWalletBalance } from "../../../utils/fetchWallet";

const LandlineRecharge = () => {
  const [bill, setBill] = useState({});
  const [showBill, setShowBill] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const { landline, loading } = useSelector((state) => state.operator);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      dispatch(paymentStart());
      const res = await axios.post("/franchiseRouter/billPaymentRequest", {
        amount: values.amount,
        SPKey: values.operator,
        phoneNumber: values.phoneNumber,
        accountNo: values.telephoneNumber,
        fetchBillID: bill.fetchBillID ? bill.fetchBillID : "0",
      });

      if (res.data.errorcode) {
        dispatch(paymentFailure());
        toast.error(res.data.msg, {
          id: "landline",
        });
      } else {
        dispatch(paymentSuccess());
        setFieldValue({
          telephoneNumber: "",
          operator: "",
          phoneNumber: "",
          circle: "",
          amount: 0,
        });
        toast.success("Recharge Successful", {
          id: "landline",
        });
        fetchWalletBalance(dispatch, currentUser);
      }
    } catch (error) {
      dispatch(paymentFailure());
      toast.error(error.message || "Something went wrong", {
        id: "landline",
      });
    }
  };

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      operator: "",
      telephoneNumber: "",
      phoneNumber: "",
      amount: 0,
    },
    validationSchema: telephoneBillSchema,
    onSubmit,
  });

  useEffect(() => {
    if (!landline) {
      fetchOperators(dispatch);
    }
  }, []);

  return (
    <>
      <section className={classes.mainContainer}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <p className={classes.heading}>Landline Bill Payment</p>
          <select
            className={classes.dropdown}
            id={classes.styledInput}
            value={values.operator}
            name="operator"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option>Select Operator</option>
            {landline?.map((provider) => {
              return (
                <option key={provider.id} value={provider.SP_key}>
                  {provider.serviceProvider}
                </option>
              );
            })}
          </select>
          {errors.operator && touched.operator && (
            <p id={classes.errors}>{errors.operator}</p>
          )}
          <input
            id={classes.styledInput}
            name="telephoneNumber"
            className={classes.telephoneNumber}
            value={values.telephoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            placeholder="Enter 10 digit Telephone Number"
          ></input>
          {errors.telephoneNumber && touched.telephoneNumber && (
            <p id={classes.errors}>{errors.telephoneNumber}</p>
          )}
          <input
            id={classes.styledInput}
            value={values.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Mobile Number"
            type="number"
          />

          {errors.phoneNumber && touched.phoneNumber && (
            <p id={classes.errors}>{errors.phoneNumber}</p>
          )}
          <div className={classes.amountContainer}>
            <input
              id={classes.styledInput}
              className={classes.amountInput}
              value={values.amount}
              name="amount"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Amount"
              type="number"
            />
            <div
              className={classes.fetchButton}
              onClick={() =>
                fetchBill(
                  {
                    accountNo: values.telephoneNumber,
                    phoneNumber: values.phoneNumber,
                    SPKey: values.operator,
                  },
                  setBill,
                  setShowBill
                )
              }
            >
              Fetch Bill
            </div>
          </div>

          {errors.amount && touched.amount && (
            <p id={classes.errors}>{errors.amount}</p>
          )}
          <Button
            btnType="submit"
            btnName={loading ? "Processing" : "Proceed"}
            disabled={loading}
          ></Button>
        </form>
      </section>
      {values.telephoneNumber &&
      values.operator &&
      showBill &&
      bill.status === 2 ? (
        <section className={classes.planContainer}>
          <div className={classes.heading}>
            <p>Bill Details</p>
          </div>
          <div className={classes.planContent}>
            <BillCard
              amount={bill.dueamount}
              dueDate={bill.duedate}
              billNumber={bill.billnumber}
              billDate={bill.billdate}
              account={bill.account}
              balance={bill.bal}
            />
          </div>
        </section>
      ) : (
        <div style={{ position: "relative" }}>
          <AdvertCard image={mobile} alt="landlineAd" sticky={true} />
        </div>
      )}
    </>
  );
};

export default LandlineRecharge;
