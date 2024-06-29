import React from "react";
import classes from "./RechargeLayout.module.css";
import ServiceMenu from "../service_menu/ServiceMenu";
import { Outlet } from "react-router-dom";
import { profileMenu } from "../../data/profilemenu";
import { useSelector } from "react-redux";

const ProfileLayout = ({ hours }) => {
  const { currentUser } = useSelector((state) => state.user);
  let text =
    hours < 4
      ? `Welcome Back ${
          currentUser.data.userType === "admin"
            ? "Admin"
            : currentUser.data.userType === "franchise"
            ? currentUser.data.franchiseName
            : "User"
        }!`
      : hours >= 4 && hours < 12
      ? `Good Morning ${
          currentUser.data.userType === "admin"
            ? "Admin"
            : currentUser.data.userType === "franchise"
            ? currentUser.data.franchiseName
            : "User"
        }!`
      : hours >= 12 && hours < 17
      ? `Good Afternoon ${
          currentUser.data.userType === "admin"
            ? "Admin"
            : currentUser.data.userType === "franchise"
            ? currentUser.data.franchiseName
            : "User"
        }!`
      : hours >= 17 && hours <= 24
      ? `Good Evening ${
          currentUser.data.userType === "admin"
            ? "Admin"
            : currentUser.data.userType === "franchise"
            ? currentUser.data.franchiseName
            : "User"
        }!`
      : `Welcome Back ${
          currentUser.data.userType === "admin"
            ? "Admin"
            : currentUser.data.userType === "franchise"
            ? currentUser.data.franchiseName
            : "User"
        }!`;
  return (
    <div className={classes.rechargeLayout}>
      <p className={classes.headerText}>{text}</p>
      <div className={classes.service_container}>
        <div className={classes.servicebar}>
          <ServiceMenu services={profileMenu} />
        </div>
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
