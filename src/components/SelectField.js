import React from "react";
import PropTypes from "prop-types";

const SelectField = props => (
  <div className="form-flex">
    <select
      className={"form-select " + (props.clicked && "form-select__clicked")}
      value={props.value}
      onChange={props.handler}
    >
      <option value="" disabled>
        {props.placeholder}
      </option>
      {props.data.map(item => {
        return (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </select>
    <label className="description-item">{props.description}</label>
  </div>
);

SelectField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  handler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  description: PropTypes.string,
  clicked: PropTypes.bool
};

export default SelectField;
