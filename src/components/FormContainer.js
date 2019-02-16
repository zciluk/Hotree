import React, {Component} from 'react'; 
import BoxContainer from './BoxContainer';
import FieldContainer from './FieldContainer';
import InputField from './InputField';
import TextField from './TextField';


class FormContainer extends Component {
    render() {
        return (
            <div className="form-container">
                <BoxContainer title="About">
                    <FieldContainer 
                    title="Title" 
                    errorMessage="Title cannot be empty"
                    required>
                        <InputField name="Title" placeholder="Make it short and clear"/>
                    </FieldContainer>
                    <FieldContainer 
                    title="Description"
                    errorMessage="Cannot be empty"
                    required>
                    <TextField name="Description" placeholder="Write about your event, be creative"/>
                    </FieldContainer>
                </BoxContainer>

                <BoxContainer title="Coordinator"/>
                <BoxContainer title="When"/>
            </div>

        );
    }

}
export default FormContainer;