import React, { useState } from "react";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Button from "@mui/material/Button";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import TheatersRoundedIcon from "@mui/icons-material/TheatersRounded";
import "../index.css";
const Footer = () => {
  const styleIcon = {
    width: "50px",
    height: "30px",
    color: "blue",
  };
  return (
    <div className="Footer_Container">
      <div className="icon">
        <span className="list">
          <SelfImprovementOutlinedIcon sx={styleIcon} />
          <span className="listaction">
            <p>Objectif</p>
            <div className="Line"></div>
          </span>
        </span>
        <span className="list">
          <TheatersRoundedIcon style={styleIcon} />
          <span className="listaction">
            <p>Scéne</p>
            <div className="Line"></div>
          </span>
        </span>
        <span className="list">
          <TimerOutlinedIcon style={styleIcon} />
          <span className="listaction">
            <p>Durée</p>
            <div className="Line"></div>
          </span>
        </span>
      </div>
      <div className="button">
        <InfoOutlinedIcon />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "orange",
            height: "45px",
            marginBottom: "5px",
          }}
        >
          COMMENCER
        </Button>
      </div>
    </div>
  );
};

export default Footer;
