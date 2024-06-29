import React from "react";
import classes from "./TopFranchise.module.css";

const TopFranchise = () => {
  return (
    <div className={classes.container}>
      <div>
        <h3 className={classes.head}>Top Franchise</h3>
        <p className={classes.subhead}>November 2023</p>
      </div>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <div
            key={index}
            id={
              index === 0
                ? classes.first
                : index === 1
                ? classes.second
                : index === 2
                ? classes.third
                : ""
            }
            className={classes.card}
          >
            <p className={classes.position}>#{index + 1}</p>
            <div className={classes.photo_container}>
              <img
                className={classes.photo}
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              ></img>
            </div>
            <div>
              <p className={classes.name}>ABC Stores</p>
              <p className={classes.location}>Kottayam</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopFranchise;
