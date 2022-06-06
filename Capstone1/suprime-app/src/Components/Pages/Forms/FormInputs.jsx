import React from "react";
import "./forms.css";

const FormInputs = (props) => {
  return (
    <div className="formInput">
      <label></label>
      <input
        placeholder={props.placeholder}
        onChange={(e) => props.setValues(e.target.value)}
      />
    </div>
  );
};

export default FormInputs;
