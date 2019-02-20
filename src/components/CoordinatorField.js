import React from "react";
import PropTypes from "prop-types";

const CoordinatorField = props => (
  <div className="form-flex">
    <select
      className={"form-select form-select__clicked"}
      value={props.value}
      onChange={props.handler}
      id="coordinator"
    >
      <option value="" disabled>
        Me
      </option>
      {props.data
        .filter(item => item.id === props.logged)
        .map(item => {
          return (
            <option key={item.id} value={item.id}>
              Me - {item.name} {item.lastname}
            </option>
          );
        })}
      <option value="" disabled>
        Others
      </option>
      {props.data
        .filter(item => item.id !== props.logged)
        .map(item => {
          return (
            <option key={item.id} value={item.id}>
              {item.name} {item.lastname}
            </option>
          );
        })}
    </select>
    <label className="description-item">{props.description}</label>
  </div>
);

CoordinatorField.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  logged: PropTypes.number.isRequired
};

export default CoordinatorField;
