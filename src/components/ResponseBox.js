import React from "react";
import PropTypes from "prop-types";

const ResponseBox = props => (
    <div className="form-container">
      <div className="response response__green">
        <div className="response__title response__title--green">
          {props.title}
        </div>
        {props.children}
      </div>
    </div>
  );

ResponseBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.element]).isRequired,
};
export default ResponseBox;
