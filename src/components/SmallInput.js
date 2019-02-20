import React from "react";
import PropTypes from "prop-types";

const SmallInput = props => (
  <div className="form-smallinput">
    <input
      className={"form-smallinput__input "}
      type={props.inputType}
      value={props.value}
      onChange={props.handler}
      placeholder={props.placeholder}
    />
    <span className="form-smallinput__label">{props.text}</span>
  </div>
);

SmallInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  handler: PropTypes.func.isRequired,
  inputType: PropTypes.oneOf(["text", "number"]).isRequired
};

export default SmallInput;
