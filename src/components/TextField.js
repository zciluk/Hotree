import React from 'react';
import PropTypes from 'prop-types';


const TextField = (props) => (
<textarea
    className={'form-textarea ' + (props.error && 'form-textarea__validated')}
    name={props.name}
    type={props.inputType}
    value={props.value}
    onChange={props.handler}
    placeholder={props.placeholder} />
);

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    placeholder: PropTypes.string,
    handler: PropTypes.func.isRequired,
    inputType: PropTypes.oneOf(['text', 'number']).isRequired
}

export default TextField;