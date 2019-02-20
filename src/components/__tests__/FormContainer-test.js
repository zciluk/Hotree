import React from 'react';
import FormContainer from '../FormContainer.js';
import renderer from 'react-test-renderer';
import moment from 'moment';
//spy on console log
global.console = {
    warn: jest.fn(),
    log: jest.fn()
  }
delete window.scrollTo
window.scrollTo = jest.fn() ;// mocking empty function, because firing scrollTo in code leads to JSDom errors
  // test data
const passingTestData = {
    category_id: 3,
    coordinator: {email: "john@mail.co", id: "4"},
    date: "2025/12/24T17:16", //example data for tests
    description: "Description something or another thing",
    duration: 10800,
    event_fee: 15,
    paid_event: true,
    reward: 2,
    title: "Test title",
}
test('should display errors when Submit is pressed and none of the data is filled', async () => {
    const component = renderer.create(
        <FormContainer/>
    );
    let tree = component.toJSON();
    
    component.root.findByProps({ id: "submit" }).props.handler();
    await(5000); // await till state is updated
    tree = component.toJSON(); ;
   expect(tree).toMatchSnapshot();     // validation messages are present in snapshot
        
   
});
test('should Submit form when all fields are properly filled', async () => {
    const component = renderer.create(
        <FormContainer/>
    );
    let tree = component.toJSON();
    component.root.findByProps({ id: "title" }).props.handler({ target: { value: passingTestData.title } });
    component.root.findByProps({ id: "description" }).props.handler({ target: { value: passingTestData.description } });
    component.root.findByProps({ id: "select" }).props.handler({ target: { value: passingTestData.category_id } });
    component.root.findByProps({ placeholder: "Fee" }).props.handler({ target: { id: "paid", value: passingTestData.paid_event } });
    component.root.findByProps({ placeholder: "Fee" }).props.handlerFee({ target: { value: String(passingTestData.event_fee) } });
    component.root.findByProps({ id: "reward" }).props.handler({ target: { value: String(passingTestData.reward) } });
    component.root.findByProps({ id: "coordinator" }).props.handler({ target: { value: passingTestData.coordinator.id } });
    component.root.findByProps({ id: "email" }).props.handler({ target: { value: passingTestData.coordinator.email } });
    component.root.findByProps({ id: "date" }).props.handlerDate({ target: { value: "2025/12/24" } });
    component.root.findByProps({ id: "date" }).props.handlerTime({ target: { value: "05:16" }});
    component.root.findByProps({ id: "duration" }).props.handler({ target: { value: String(passingTestData.duration/3600) }});    
    component.root.findByProps({ id: "date" }).props.handlerPastMidday({ target: { id: "pm", value: true } });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.root.findByProps({ id: "submit" }).props.handler();
    await(6000); // await till state is updated
    tree = component.toJSON(); 
   expect(tree).toMatchSnapshot(); 
   expect(global.console.log).toHaveBeenCalledWith(passingTestData); // check whether console.log have the same data as in passingTestData 
});

test('should not pass more than 140 letters into description', () => {
    const component = renderer.create(
        <FormContainer/>
    );
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisi porta, egestas odio et, feugiat urna. Proin tempus faucibus leo, in amet.";
    component.root.findByProps({ id: "description" }).props.handler({ target: { value: lorem } });
    expect(component.root.findByProps({ id: "description" }).props.value).toEqual(lorem.slice(0,140));
    
});

test('should change date to todays date if given date is earlier ', () => {
    const component = renderer.create(
        <FormContainer/>
    );
    component.root.findByProps({ id: "date" }).props.handlerDate({ target: { value: "2001-09-11" } });
    expect(component.root.findByProps({ id: "date" }).props.valueDate).toEqual(moment().format(moment.HTML5_FMT.DATE));
});

test('should change time to 12:00 if time is later than this ', () => {
    const component = renderer.create(
        <FormContainer/>
    );
    component.root.findByProps({ id: "date" }).props.handlerTime({ target: { value: "21:37" }});
    expect(component.root.findByProps({ id: "date" }).props.valueTime).toEqual("12:00");
});