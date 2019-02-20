import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button className="form-button" id={props.id} onClick={props.handler}>
    {props.name}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default Button;
