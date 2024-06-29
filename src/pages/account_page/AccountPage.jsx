import React from "react";
import classes from "./AccountPage.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      {/* franchise profile */}
      {currentUser && currentUser.data.userType === "franchise" && (
        <div className={classes.mainContainer}>
          <div className={classes.subContainer}>
            <div className={classes.imgContainer}>
              <img src="https://placehold.jp/240x240.png" />
            </div>
            <div className={classes.leftGridContent}>
              <p>
                <strong>Date Of Birth:</strong>{" "}
                {currentUser.data.dateOfBirth.split("T")[0]}
              </p>
              <p>
                <strong>Pan Center:</strong>{" "}
                {currentUser.data.panCenter ? "Yes" : "No"}
              </p>
            </div>
          </div>
          <div className={classes.subContainer}>
            <div className="div">
              <p className={classes.franchiseName}>
                {currentUser.data.franchiseName.toUpperCase()}
              </p>
              <p className={classes.accountType}>
                {currentUser.data.userType.toUpperCase()}
              </p>
              <p>
                <strong>ID : </strong>
                {currentUser.data.franchiseUniqueId}
              </p>
              <p>
                <strong>Created At : </strong>
                {currentUser.data.createdAt.split("T")[0]}
              </p>
              <div className={classes.planDiv}>
                <p>
                  <strong>User Plan : </strong>
                  {currentUser.data.userPlan.toUpperCase()}
                </p>
                {currentUser.data.userPlan === "free" ? (
                  <button
                    className={classes.planBtn}
                    onClick={() => {
                      navigate("/plan");
                    }}
                  >
                    Upgrade
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={classes.tabContainer}>
              <Tabs>
                <TabList>
                  <Tab>Contact Details</Tab>
                  <Tab>Bank Details</Tab>
                </TabList>

                <TabPanel>
                  <div>
                    <p>
                      <strong>Owner Name : </strong>
                      {currentUser.data.ownerName}
                    </p>
                    <p>
                      <strong>Phone Number : </strong>
                      {currentUser.data.phoneNumber}
                    </p>
                    <p>
                      <strong>Email : </strong>
                      {currentUser.data.email}
                    </p>
                    <p>
                      <strong>Address : </strong>
                      {currentUser.data.franchiseAddressLine1.concat(
                        " ",
                        currentUser.data.franchiseAddressLine2
                      )}
                    </p>
                    <p>
                      <strong>State : </strong>
                      {currentUser.data.state}
                    </p>
                    <p>
                      <strong>District : </strong>
                      {currentUser.data.district}
                    </p>
                    <p>
                      <strong>Pin Code : </strong>
                      {currentUser.data.pinCode}
                    </p>
                    <p>
                      <strong>Ward : </strong>
                      {currentUser.data.ward}
                    </p>
                    <p>
                      <strong>Panchayath : </strong>
                      {currentUser.data.panchayath}
                    </p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    <p>
                      <strong>Account Name : </strong>
                      {currentUser.data.accountName}
                    </p>
                    <p>
                      <strong>Bank : </strong>
                      {currentUser.data.bank}
                    </p>
                    <p>
                      <strong>Branch Name : </strong>
                      {currentUser.data.branchName}
                    </p>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      )}

      {/* admin profile */}

      {currentUser && currentUser.data.userType === "admin" && (
        <p>Account settings coming Soon...</p>
      )}

      {/* distributor profile */}

      {currentUser && currentUser.data.userType === "distributor" && (
        <p>Account settings coming Soon...</p>
      )}
    </>
  );
};

export default AccountPage;
