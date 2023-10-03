import React from "react";
import InputComponent from "./InputComponent";
import BtnComponent from "./BtnComponent";

const ThirdComponent = () => {
  return (
    <div className="div_third">
      <div className="seprate_third_div_one">
        <div className="div_center">
          <p className="sameSize_color">New to GetWork?</p>
          <div className="btn">
            <p style={{ lineHeight: "0" }}>Upload Resume</p>
            <p style={{ lineHeight: "0", width: "100%", fontSize: "12px" }}>
              Connect With Hiring Experts
            </p>
          </div>
        </div>
      </div>
      <div className="div_third_second_seprate">
        <div className="div_center_two">
          <h4 className="title_h4">Launch Your Career</h4>
          <p className="title_h6">with GetWork OneApp</p>
          <p className="title_h6">Search, find, apply and track for the</p>
          <p className="title_h6">latest job on the go!</p>
        </div>
        <div className="div_center_two">
          <img src="./image.svg" />
        </div>
        <div className="div_center_two">
          <InputComponent name="First" />
          <BtnComponent title="Share App Link" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              border: "1px solid #033363",
              alignItems: "center",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                width: "52%",
                textAlign: "start",
                marginLeft: "10px",
              }}
            >
              Scan QR Available on both iOS & Android
            </p>
            <img src="./barcode.png" />
          </div>
        </div>
      </div>
      <div className="seprate_third_div_one third_third_container"></div>
    </div>
  );
};

export default ThirdComponent;
