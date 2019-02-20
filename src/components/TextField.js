import React from "react";
import PropTypes from "prop-types";

const TextField = props => (
  <div className="form-flex">
    <textarea
      className={"form-textarea " + (props.error && "form-textarea__validated")}
      type={props.inputType}
      value={props.value}
      onChange={props.handler}
      placeholder={props.placeholder}
    />
    <label className="description-item">
      Max length: {props.limit} characters{" "}
    </label>
    <label
      className={
        "description-item description-item__left " +
        (props.value.length === props.limit && "description-item__red")
      }
    >
      {props.value.length}/{props.limit}
    </label>
  </div>
);

TextField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  handler: PropTypes.func.isRequired,
  inputType: PropTypes.oneOf(["text", "number"]).isRequired,
  limit: PropTypes.number.isRequired,
  error: PropTypes.bool
};

export default TextField;
