import React from "react";
import PropTypes from "prop-types";

const InputField = props => (
  <input
    className={"form-input " + (props.error && "form-input__validated")}
    type={props.inputType}
    value={props.value}
    onChange={props.handler}
    placeholder={props.placeholder}
    id={props.id}
  />
);

InputField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  handler: PropTypes.func.isRequired,
  inputType: PropTypes.oneOf(["text", "number", "email"]).isRequired,
  error: PropTypes.bool,
  id: PropTypes.string
};

export default InputField;
