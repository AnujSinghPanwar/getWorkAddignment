import React from "react";
import Select from "react-select";
import { GrDown } from "react-icons/gr";

const MySelect = ({ inputValue, option, title, onChange }) => {
  return (
    <div style={{ margin: "10px 0px" }}>
      <div
        style={{
          padding: "0px 5px",
          margin: "20px 0px 20px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title} <GrDown />
      </div>
      <Select
        options={option}
        // value={inputValue}
        style={{ width: "80%" }}
        defaultValue={inputValue}
        placeholder="Search"
        isSearchable
        noOptionsMessage={() => "Not find..... "}
        onChange={onChange}
      />
    </div>
  );
};

export default MySelect;
