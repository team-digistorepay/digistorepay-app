import React from "react";
import Balance from "../../components/profile_components/summary/balance/Balance";
import classes from "./SummaryPage.module.css";
import Transactions from "../../components/profile_components/summary/transactions/Transactions";
import TopFranchise from "../../components/profile_components/summary/top_franchise/TopFranchise";
import AdvertCard from "../../components/advert_card/AdvertCard";
// import dth from "../../assets/ad/dth.jpg";
import mobile from "../../assets/ad/mobile.jpeg";
import { useSelector } from "react-redux";

const SummaryPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className={classes.main_container}>
      <div className={classes.wallet}>
        <Balance />
      </div>
      <div className={classes.cardPay}>
        <AdvertCard image={mobile} alt="ad" />
      </div>
      <div className={classes.transaction}>
        <Transactions />
      </div>
      <div className={classes.top_franchise}>
        <TopFranchise />
      </div>
    </div>
  );
};

export default SummaryPage;
