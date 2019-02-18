import React, {Component} from 'react'; 
import BoxContainer from './BoxContainer';
import FieldContainer from './FieldContainer';
import InputField from './InputField';
import TextField from './TextField';
import SelectField from './SelectField';
import PaymentField from './PaymentField';
import SmallInput  from './SmallInput';
import CoordinatorField from './CoordinatorField';
import DateField from './DateField';

// global variables
const jsonCategory = require('../mocks/categories.json');
const jsonCoordinators = require('../mocks/employes.json');
const loggedUser = 3; // ID of logged user global
const descLimit = 140; // global description limit

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            titleError: false,
            description: '',
            descriptionError: false,
            descriptionLimit: descLimit,
            categories: [],
            categorySelected: '',
            categoryClicked: false, //for coloring the options placeholder in Select, its quite challenging in CSS
            paidEvent: false,
            fee: '',
            feeError: false,
            duration : '',
            reward: '',
            email: '',
            emailError: false,
            coordinators: [],
            coordinatorSelected: loggedUser
        };
    }
    
    componentDidMount() {
        // parse json mocks into state
        this.setState({ categories: JSON.parse(JSON.stringify(jsonCategory))});
        this.setState({ coordinators: JSON.parse(JSON.stringify(jsonCoordinators))});
    }

    onFormSubmit() {
         // submit 
    }

    // Handlers for fields state
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
    handlePaymentChange = e => {
        if(e.target.id === "paid") {
            this.setState({ paidEvent: true });
        } else if(e.target.id === "free") {
            this.setState({ paidEvent: false });
            this.setState({ feeError: false });
        } 
    }
    handleFeeChange = e => {
        let numValue = this.numbersOnly(e.target.value);
        if(this.state.paidEvent && numValue === '') {
            this.setState({ feeError: true });
        } else {
            this.setState({ feeError: false });
        }
        this.setState({ fee: numValue });
    }
    handleDurationChange = e => {
        this.setState({ duration: this.numbersOnly(e.target.value) });
    }
    handleRewardChange = e => {
        this.setState({ reward: this.numbersOnly(e.target.value) });
    }
    handleEmailChange = e => {
        // eslint-disable-next-line
        const regex= new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        if(!regex.test(e.target.value) && e.target.value !== '') {
            this.setState({ emailError: true });
        } else {
            this.setState({ emailError: false });
        }
        this.setState({ email: e.target.value });
    }

    handleCoordinatorChange = e => {
        this.setState({ coordinatorSelected: e.target.value });
    }

    //helper functions 
    numbersOnly = input => {
        return input.replace(/\D/g, '');
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

                    <FieldContainer 
                    title="Payment"
                    errorMessage="Fee cannot be empty"
                    error={this.state.feeError}>
                        <PaymentField 
                        name="Payment" 
                        placeholder="Fee"
                        handler={this.handlePaymentChange}
                        handlerFee={this.handleFeeChange}
                        selected={this.state.paidEvent}
                        error={this.state.feeError}
                        value={this.state.fee}
                        />
                    </FieldContainer>
                    <FieldContainer 
                    title="Reward">
                        <SmallInput 
                        name="Reward" 
                        placeholder="Number"
                        handler={this.handleRewardChange}
                        text="rewards points for attendance"
                        value={this.state.reward}
                        />
                    </FieldContainer>
                </BoxContainer>

                <BoxContainer title="Coordinator">
                    <FieldContainer 
                        title="Responsible"
                        required>
                            <CoordinatorField 
                            name="Responsible" 
                            placeholder="Select category"
                            description=""
                            data={this.state.coordinators}
                            handler={this.handleCoordinatorChange}
                            value={this.state.coordinatorSelected}
                            logged={loggedUser}
                            />
                    </FieldContainer>
                    <FieldContainer 
                    title="E-mail" 
                    errorMessage="Invalid email format"
                    error={this.state.emailError}>
                        <InputField 
                        name="Email" 
                        inputType="email"
                        placeholder="Email"
                        value={this.state.email}
                        handler={this.handleEmailChange}
                        error={this.state.emailError}/>
                    </FieldContainer>
                </BoxContainer>
                <BoxContainer title="When">
                    <FieldContainer 
                    title="Starts on"
                    required
                    errorMessage="Start date required"
                    error={this.state.dateError}>
                        <DateField 
                        name="Date" 
                        handler={this.handleDateChange}
                        value={this.state.duration}
                        error={this.state.dateError}
                        />
                    </FieldContainer>
                    <FieldContainer 
                    title="Duration">
                        <SmallInput 
                        name="Reward" 
                        placeholder="Number"
                        handler={this.handleDurationChange}
                        text="hours"
                        value={this.state.duration}
                        />
                    </FieldContainer>
                </BoxContainer>
            </div>

        );
    }

}
export default FormContainer;