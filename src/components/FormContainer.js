import React, {Component} from 'react'; 
import BoxContainer from './BoxContainer';
import FieldContainer from './FieldContainer';
import InputField from './InputField';
import TextField from './TextField';
import SelectField from './SelectField';
const jsonCategory = require('../mocks/categories.json');

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            titleError: false,
            description: '',
            descriptionError: false,
            descriptionLimit: 140,
            categories: [],
            categorySelected: '',
            categoryClicked: false, //for coloring the options in Select, its quite hard in CSS
        };
    }
    
    componentDidMount() {
        this.setState({ categories: JSON.parse(JSON.stringify(jsonCategory))});
    }
    onFormSubmit() {
         // submit 
    }
    handleTitleChange = e => {
        if(e.target.value === '') {
            this.setState({ titleError: true });
        } else {
            this.setState({ titleError: false });
        }
        this.setState({ title: e.target.value });
       
    }
    handleDescriptionChange = e => {
        if(e.target.value === '') {
            this.setState({ descriptionError: true });
        } else {
            this.setState({ descriptionError: false });
        }
        this.setState({ description: e.target.value.substring(0, this.state.descriptionLimit) });
    }
    handleCategoryChange = e => {
        if(!this.state.categoryClicked) this.setState({ categoryClicked: true });
        this.setState({ categorySelected: e.target.value });
    }
       
    render() {
        
        return (
            <div className="form-container">
                <BoxContainer title="About">
                    <FieldContainer 
                    title="Title" 
                    errorMessage="Title cannot be empty"
                    required
                    error={this.state.titleError}>
                        <InputField 
                        name="Title" 
                        inputType="text"
                        placeholder="Make it short and clear"
                        value={this.state.title}
                        handler={this.handleTitleChange}
                        error={this.state.titleError}/>
                    </FieldContainer>

                    <FieldContainer 
                    title="Description"
                    errorMessage="Description cannot be empty"
                    required
                    error={this.state.descriptionError}>
                        <TextField 
                        name="Description" 
                        inputType="text"
                        placeholder="Write about your event, be creative"
                        value={this.state.description}
                        handler={this.handleDescriptionChange}
                        limit={this.state.descriptionLimit}
                        error={this.state.descriptionError}/>
                    </FieldContainer>

                    <FieldContainer 
                    title="Category">
                        <SelectField 
                        name="Category" 
                        placeholder="Select category"
                        description="Describes topic and people who should be interested in this event"
                        data={this.state.categories}
                        handler={this.handleCategoryChange}
                        value={this.state.categorySelected}
                        clicked={this.state.categoryClicked}
                        />
                    </FieldContainer>

                </BoxContainer>

                <BoxContainer title="Coordinator"/>
                <BoxContainer title="When"/>
            </div>

        );
    }

}
export default FormContainer;