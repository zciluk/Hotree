import React from "react";
import PropTypes from "prop-types";

function BoxContainer(props) {
  return (
    <div className="box-container">
      <div className="box-container__title">{props.title}</div>
      <hr className="box-container__vertical" />
      {props.children}
    </div>
  );
}
BoxContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array
};
export default BoxContainer;
