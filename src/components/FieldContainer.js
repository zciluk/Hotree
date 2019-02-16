import React from 'react';
import PropTypes from 'prop-types';
const FieldContainer = (props) => ( 
    <div className="field-container">
        <label className={'field-container__label ' + (props.error && 'field-container__label--red')   } >{props.title}
        {props.required && <label className={'field-container__label--required'}>*</label>}
        </label>
        <div className="field-container__field">
        {props.children}
        </div>
        {props.error && <figure className="field-container__validator">{props.errorMessage}</figure>   } 
    </div>
);

FieldContainer.propTypes = {
    title: PropTypes.string.isRequired,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    children: PropTypes.element
}

export default FieldContainer;