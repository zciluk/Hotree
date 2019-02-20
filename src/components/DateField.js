import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const DateField = props => (
  <div className="form-date">
    <input
      className={
        "form-date__datepicker " +
        (props.error && "form-date__datepicker--validated")
      }
      type="date"
      min={moment().format(moment.HTML5_FMT.DATE)}
      value={props.valueDate}
      onChange={props.handlerDate}
      placeholder="dd/mm/yyyy"
    />
    <span className={"form-date__label"}> at </span>
    <input
      className={
        "form-date__timepicker " +
        (props.error && "form-date__timepicker--validated")
      }
      name={props.name}
      type="time"
      min="0:00"
      max="12:00"
      value={props.valueTime}
      onChange={props.handlerTime}
      placeholder="--:--"
    />
    <div className="form-payment__radio-group">
      <input
        onChange={props.handlerPastMidday}
        type="radio"
        className="form-payment__radio-input"
        id="am"
        name="AM"
        checked={!props.pastMidday}
      />
      <label htmlFor="am" className="form-payment__radio-label">
        <span className="form-payment__radio-button" />
        <span className="form-payment__radio-labelname">AM</span>
      </label>
    </div>

    <div className="form-payment__radio-group">
      <input
        onChange={props.handlerPastMidday}
        type="radio"
        className="form-payment__radio-input"
        id="pm"
        name="PM"
        checked={props.pastMidday}
      />
      <label htmlFor="pm" className="form-payment__radio-label">
        <span className="form-payment__radio-button" />
        <span className="form-payment__radio-labelname">PM</span>
      </label>
    </div>
  </div>
);

DateField.propTypes = {
  valueDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  valueTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handlerDate: PropTypes.func.isRequired,
  handlerTime: PropTypes.func.isRequired,
  handlerPastMidday: PropTypes.func.isRequired,
  pastMidday: PropTypes.bool.isRequired,
  error: PropTypes.bool
};

export default DateField;
