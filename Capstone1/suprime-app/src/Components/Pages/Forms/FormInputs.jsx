import React from "react";
import "./forms.css";
import { useState } from "react";

const FormInputs = (props) => {
  const [focus, setFocus] = useState(false);

  const { onChange, errMessage, id, ...inputProps } = props;

  const checkFocus = (e) => {
    setFocus(true);
  };

  return (
    <div className="input-rows">
      <input
        placeholder={props.placeholder}
        {...inputProps}
        onChange={onChange}
        onBlur={checkFocus}
        focus={focus.toString()}
      />
      <span className="cont-err">{errMessage}</span>
    </div>
  );
};

export default FormInputs;
