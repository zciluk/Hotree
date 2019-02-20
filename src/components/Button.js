import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => ( 
        <button className="form-button" 
                onClick={props.handler}>
            {props.name}
           
        </button>
        );
    

    Button.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    placeholder: PropTypes.string,
    handler: PropTypes.func.isRequired,
    inputType: PropTypes.oneOf(['text', 'number']).isRequired
}

export default Button;