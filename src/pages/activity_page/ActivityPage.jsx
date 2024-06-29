import React, { useState, useEffect } from "react";
import WalletRechargeRequest from "../../components/profile_components/activity/WalletRechargeRequest";
import classes from "./ActivityPage.module.css";
import { useSelector } from "react-redux";
import WalletRequestCard from "../../components/wallet_request_card/WalletRequestCard";
import { toast } from "react-hot-toast";
import axios from "axios";
const ActivityPage = () => {
  const [topUpRequests, setTopUpRequests] = useState();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchWalletRequests = async () => {
      try {
        const response = await axios.get("/auth/moneyTransferVerify");
        if (response.error) {
          toast.error(response.error, {
            id: "request",
          });
        } else {
          setTopUpRequests(response.data.data);
          toast.success("Wallet Top Up Requests Updated", {
            id: "request",
          });
        }
      } catch (error) {
        toast.error("Error Fetching Wallet Top Up Requests", {
          id: "request",
        });
      }
    };

    if (currentUser.data.userType === "admin") {
      fetchWalletRequests();
    }
  }, [currentUser]);

  return currentUser.data.userType === "admin" ? (
    <div className={classes.mainContainer}>
      <div className={classes.left}>
        <WalletRechargeRequest>
          {topUpRequests && topUpRequests.length !== 0 ? (
            topUpRequests.map((request) => {
              return (
                <WalletRequestCard
                  key={request.id}
                  id={request.uniqueId}
                  franchise={request.userName}
                  amount={request.amount}
                  transactionType={request.transactionType}
                  transactionId={request.transationId}
                  createdAt={request.createdAt}
                  date={request.date}
                  documentPic={request.documentPic}
                  executiveId={request.executiveId}
                  executiveName={request.executiveName}
                  fromUpiId={request.fromUpiId}
                  remark={request.remark}
                  referenceNo={request.referenceNo}
                  status={request.status}
                  toAcc={request.toAcc}
                  toUpiId={request.toUpiId}
                  updatedAt={request.updatedAt}
                  fromAcc={request.fromAcc}
                  setTopUpRequests={setTopUpRequests}
                />
              );
            })
          ) : (
            <p>No Wallet Top up Request available.</p>
          )}
        </WalletRechargeRequest>
      </div>
      <div className={classes.right}>More activities coming soon...</div>
    </div>
  ) : (
    <p>You dont have permission to access this page</p>
  );
};

export default ActivityPage;
