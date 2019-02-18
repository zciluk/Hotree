import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DateField = (props) => ( 
    <div className="form-date">
        <input
            className={'form-date__datepicker'}
            name={props.name}
            type="date"
            min={moment().format(moment.HTML5_FMT.DATE)}
            
            onChange={props.handler}
            placeholder={props.placeholder} />
        <span className={'form-date__label'}> at </span>
        <input
            className={'form-date__timepicker'}
            name={props.name}
            type="time"
            min="0:00" 
            max="12:00"
            onChange={props.handler}
            placeholder={props.placeholder} />    
        <div className="form-payment__radio-group">
            <input onChange={props.handler} type="radio" className="form-payment__radio-input" id="am" name="AM" checked={!props.selected} />
            <label htmlFor="am" className="form-payment__radio-label">
                <span className="form-payment__radio-button" />
                <span className="form-payment__radio-labelname">AM</span>
            </label>
        </div>

        <div className="form-payment__radio-group">
            <input onChange={props.handler} type="radio" className="form-payment__radio-input" id="pm" name="PM" checked={props.selected}  />
            <label htmlFor="pm" className="form-payment__radio-label">
                <span className="form-payment__radio-button" />
                <span className="form-payment__radio-labelname">PM</span>
            </label>
        </div>    
    </div>
        );
    console.log(moment().format(moment.HTML5_FMT.DATE));

DateField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    placeholder: PropTypes.string,
    handler: PropTypes.func.isRequired,
    inputType: PropTypes.oneOf(['text', 'number']).isRequired
}

export default DateField;