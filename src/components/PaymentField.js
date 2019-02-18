import React from "react";
import PropTypes from "prop-types";

const PaymentField = props => (
  <div className="form-payment">
    <div className="form-payment__radio-group">
      <input onChange={props.handler} type="radio" className="form-payment__radio-input" id="free" name={props.name} checked={!props.selected} />
      <label htmlFor="free" className="form-payment__radio-label">
        <span className="form-payment__radio-button" />
        <span className="form-payment__radio-labelname">Free event</span>
      </label>
    </div>

    <div className="form-payment__radio-group">
      <input onChange={props.handler} type="radio" className="form-payment__radio-input" id="paid" name={props.name} checked={props.selected}  />
      <label htmlFor="paid" className="form-payment__radio-label">
        <span className="form-payment__radio-button" />
        <span className="form-payment__radio-labelname">Paid event</span>
      </label>
    </div>
    { props.selected && 
    <input
    className={'form-payment__input ' + (props.error && 'form-payment__input--validated ')}
    id="feeField"
    pattern="[0-9]*"
    name={props.name}
    type={props.inputType}
    value={props.value}
    onChange={props.handlerFee}
    placeholder={props.placeholder} />
    }
    { props.selected &&  <span className="form-payment__input--label">$</span>}
  </div>

);

PaymentField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  clicked: PropTypes.bool
};

export default PaymentField;
