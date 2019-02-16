import React, { Component } from 'react';  
import '../style/main.scss';
import FormContainer from './FormContainer.js';
import Header from './Header';

class App extends Component {  
  render() {
    return (
      <div className="container">
            <Header/>
            { /* here will be some success tenary operations */ }
            <FormContainer/>
      </div>
    );
  }
}

export default App;  