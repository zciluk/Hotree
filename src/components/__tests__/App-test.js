import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';


// basic snapshot test of initial layout render - checks on every run if layout, UI and components are in place
test('should render initial layout', () => {
    const component = renderer.create(
        <App/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
   
});