import React from "react";
import PropTypes from "prop-types";

const CoordinatorField = props => (
  <div className="form-flex">
    <select
      className={'form-select form-select__clicked'}
      name={props.name}
      value={props.value}
      onChange={props.handler}
    >  
            <option value="" disabled>Me</option>
            {props.data
                .filter(item => item.id === props.logged)
                .map(item => {
                    return (
                        <option key={item.id} value={item.id}>
                           Me - {item.name} {item.lastname}
                        </option>
                        );
                    })}
            <option value="" disabled>Others</option>
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
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  clicked: PropTypes.bool
};

export default CoordinatorField;
