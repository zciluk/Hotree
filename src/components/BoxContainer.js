import React from 'react';


function BoxContainer(props) {
    return (
      <div className="box-container">
        <div className="box-container__title">{props.title}</div>
        <hr className="box-container__vertical"/>
        {props.children}
      </div>
    );
  }
  export default BoxContainer;