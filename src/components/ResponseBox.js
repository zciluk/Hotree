import React from 'react';


function ResponseBox(props) {
    return (
        <div className="form-container">
        <div className="response response__green">
            <div className="response__title response__title--green">{props.title}</div>
            {props.children}
        </div>
      </div>
    );
  }

  export default ResponseBox;