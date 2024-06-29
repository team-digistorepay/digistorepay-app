import React from "react";
import classes from "./TransactionHistory.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa6";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const fetchTransactions = async () => {
    try {
      const response =
        currentUser && currentUser.data.userType === "admin"
          ? await axios.get("/auth/transationHistory")
          : await axios.get("/franchiseRouter/transactionHistory");
      setTransactions(response.data.data);
      if (response.error) {
        toast.error(response.error, {
          id: "transactions",
        });
      } else {
        toast.success("Transactions Updated", {
          id: "transactions",
        });
      }
    } catch (error) {
      toast.error("Error fetching transactions", {
        id: "transactions",
      });
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <div className={classes.mainContainer}>
        {transactions && transactions.length !== 0 ? (
          transactions.map((transaction) => {
            return (
              <div key={transaction.id}>
                <div className={classes.headerSection}>
                  <p className={classes.planAmount}>
                    {" "}
                    Transaction ID : {transaction.transactionId}
                  </p>
                  {transaction.status === "success" && (
                    <FaFilePdf
                      className={classes.invoice}
                      onClick={() =>
                        navigate(`/transactions/${transaction.transactionId}`, {
                          state: transaction,
                        })
                      }
                    />
                  )}
                </div>

                <div className={classes.description}>
                  <p>
                    <strong>Service :</strong> {transaction.service}
                  </p>
                  <p>
                    <strong>Created at :</strong>{" "}
                    {transaction.createdAt.split("T")[0]}
                  </p>
                  <p>
                    <strong>Status :</strong>{" "}
                    <span
                      className={
                        transaction.status === "success"
                          ? classes.success
                          : classes.failure
                      }
                    >
                      {transaction.status.toUpperCase()}
                    </span>{" "}
                  </p>
                  {currentUser.data.userType === "admin" && (
                    <p>
                      <strong>Franchise Name :</strong> {transaction.userName}
                    </p>
                  )}
                  <p>
                    <strong>Transaction amount</strong> : {transaction.amount}
                  </p>
                  <p>
                    <strong>Franchisee Commission :</strong>{" "}
                    {transaction.franchiseCommission}
                  </p>
                  {currentUser.data.userType === "admin" && (
                    <p>
                      <strong>HO Commission :</strong>{" "}
                      {transaction.adminCommission}
                    </p>
                  )}
                  <p>
                    <strong>Wallet balance :</strong>{" "}
                    {transaction.walletBalance}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Transactions found</p>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
