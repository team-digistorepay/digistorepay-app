import React from "react";
import classes from "./Transactions.module.css";
import { Link } from "react-router-dom";

const Transactions = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headernav}>
        <p className={classes.head}>Tranction History</p>
        <Link className={classes.link} to="/profile/transactions">
          <p className={classes.button}>See All</p>
        </Link>
      </div>
    </div>
  );
};

export default Transactions;
