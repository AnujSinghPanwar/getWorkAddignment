import React from "react";
import "../styles/input.css";
const InputComponent = () => {
  return (
    <div className="input_container">
      <input
        type="text"
        id="username"
        autoComplete="off"
        placeholder=""
        required
        className="text_input"
      />
      <label  className="label">Email & Contact No</label>
    </div>
  );
};

export default InputComponent;
