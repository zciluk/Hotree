import React from "react";
import "../style/main.scss";
import FormContainer from "./FormContainer.js";
import Header from "./Header";

const App = props => (
      <div className="container">
        <Header />
        <FormContainer />
      </div>
    );


export default App;
