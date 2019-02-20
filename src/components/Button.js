import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button className="form-button" onClick={props.handler}>
    {props.name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default Button;
