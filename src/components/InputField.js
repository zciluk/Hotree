import React from 'react';
import PropTypes from 'prop-types';


const InputField = (props) => ( 
<input
    className={'form-input ' + (props.error && 'form-input__validated')}
    name={props.name}
    type={props.inputType}
    value={props.value}
    onChange={props.handler}
    placeholder={props.placeholder} />
);

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    placeholder: PropTypes.string,
    handler: PropTypes.func.isRequired,
    inputType: PropTypes.oneOf(['text', 'number']).isRequired
}

export default InputField;