import React from "react";


const BtnComponent = ({ title }) => {
  return (
    <div
      style={{
        margin: "10px 0px",
        padding: "12px",
        borderRadius: "5px",
        cursor: "pointer",
        background: "#033363",
        color: "white",
      }}
    >
      {title}
    </div>
  );
};

export default BtnComponent;
