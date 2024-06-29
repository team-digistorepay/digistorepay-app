import React from "react";
import classes from "./RechargePage.module.css";
import AdvertCard from "../../components/advert_card/AdvertCard";
import { useLocation } from "react-router-dom";
import mobile from "../../assets/ad/mobile.jpg";
import dth from "../../assets/ad/dth.jpg";
import landline from "../../assets/ad/mobile.jpg";
import broadband from "../../assets/ad/mobile.jpg";
import cylinder from "../../assets/ad/mobile.jpg";
import electricity from "../../assets/ad/mobile.jpg";
import water from "../../assets/ad/mobile.jpg";
import fasttag from "../../assets/ad/mobile.jpg";
import train from "../../assets/ad/mobile.jpg";
import bus from "../../assets/ad/mobile.jpg";
import insurance from "../../assets/ad/mobile.jpg";
import tax from "../../assets/ad/mobile.jpg";
import loan from "../../assets/ad/mobile.jpg";
import education from "../../assets/ad/mobile.jpg";

const RechargePage = ({ children }) => {
  const location = useLocation();
  const route = location.pathname.slice(location.pathname.lastIndexOf("/") + 1);

  return (
    <div className={classes.service_content}>
      <>
        {children}
        {/* <div style={{ position: "relative" }}>
          <AdvertCard
            image={
              route === "mobile"
                ? mobile
                : route === "dth"
                ? dth
                : route === "landline"
                ? landline
                : route === "broadband"
                ? broadband
                : route === "cylinder"
                ? cylinder
                : route === "electricity"
                ? electricity
                : route === "water"
                ? water
                : route === "fasttag"
                ? fasttag
                : route === "train"
                ? train
                : route === "bus"
                ? bus
                : route === "insurance"
                ? insurance
                : route === "tax"
                ? tax
                : route === "loan"
                ? loan
                : route === "education"
                ? education
                : null
            }
            alt={`${route}ad`}
            sticky={true}
          />
        </div> */}
      </>
    </div>
  );
};

export default RechargePage;
