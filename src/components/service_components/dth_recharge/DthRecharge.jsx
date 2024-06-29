import React, { useState, useEffect } from "react";
import classes from "./Dthrecharge.module.css";
import Button from "../../button/Button";
import { useFormik } from "formik";
import { dthRechargeSchema } from "../../../Validations/service_component_validations/dth/DthValidation";
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

const DthRecharge = () => {
  const [bill, setBill] = useState({});
  const [showBill, setShowBill] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const { dth, loading } = useSelector((state) => state.operator);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      dispatch(paymentStart());
      const res = await axios.post("/franchiseRouter/billPaymentRequest", {
        amount: values.amount,
        SPKey: values.operator,
        phoneNumber: values.phoneNumber,
        accountNo: values.vcNumber,
        fetchBillID: bill.fetchBillID ? bill.fetchBillID : "0",
      });

      if (res.data.errorcode) {
        dispatch(paymentFailure());
        toast.error(res.data.msg, {
          id: "dth",
        });
      } else {
        dispatch(paymentSuccess());
        setFieldValue({
          vcNumber: "",
          operator: "",
          phoneNumber: "",
          circle: "",
          amount: 0,
        });
        toast.success("Recharge Successful", {
          id: "dth",
        });
        fetchWalletBalance(dispatch, currentUser);
      }
    } catch (error) {
      dispatch(paymentFailure());
      toast.error(error.message || "Something went wrong", {
        id: "dth",
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
      vcNumber: "",
      phoneNumber: "",
      amount: 0,
    },
    validationSchema: dthRechargeSchema,
    onSubmit,
  });

  useEffect(() => {
    if (!dth) {
      fetchOperators(dispatch);
    }
  }, []);

  return (
    <>
      <section className={classes.mainContainer}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <p className={classes.heading}>DTH Recharge</p>
          <select
            className={classes.dropdown}
            id={classes.styledInput}
            value={values.operator}
            name="operator"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option>Select Operator</option>
            {dth?.map((provider) => {
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
            value={values.vcNumber}
            name="vcNumber"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter VC Number"
            type="number"
          />

          {errors.vcNumber && touched.vcNumber && (
            <p id={classes.errors}>{errors.vcNumber}</p>
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
                    accountNo: values.vcNumber,
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
      {values.vcNumber && values.operator && showBill && bill.status === 2 ? (
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
          <AdvertCard image={mobile} alt="dthAd" sticky={true} />
        </div>
      )}
    </>
  );
};

export default DthRecharge;
