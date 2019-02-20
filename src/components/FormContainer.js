import React, { Component } from "react";
import moment from "moment";
import BoxContainer from "./BoxContainer";
import FieldContainer from "./FieldContainer";
import InputField from "./InputField";
import TextField from "./TextField";
import SelectField from "./SelectField";
import PaymentField from "./PaymentField";
import SmallInput from "./SmallInput";
import CoordinatorField from "./CoordinatorField";
import DateField from "./DateField";
import Button from "./Button";
import ResponseBox from "./ResponseBox";

// global variables
const jsonCategory = require("../mocks/categories.json");
const jsonCoordinators = require("../mocks/employes.json");
const loggedUser = 3; // ID of logged user global
const descLimit = 140; // global description limit

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitSuccess: false,
      title: "",
      titleError: false,
      description: "",
      descriptionError: false,
      descriptionLimit: descLimit,
      categories: [],
      categorySelected: "",
      categoryClicked: false, //for coloring the options placeholder in Select, its quite challenging in CSS
      paidEvent: false,
      fee: "",
      feeError: false,
      duration: "",
      reward: "",
      email: "",
      emailError: false,
      coordinators: [],
      coordinatorSelected: loggedUser,
      dateError: false,
      date: "",
      time: "",
      pastMidday: false
    };
  }

  componentDidMount() {
    // parse json mocks into state
    this.setState({ categories: JSON.parse(JSON.stringify(jsonCategory)) });
    this.setState({
      coordinators: JSON.parse(JSON.stringify(jsonCoordinators))
    });
  }

  onFormSubmit = () => {
    // submit
    // onChange() - change all req fields
    //this.handleTitleChange();
    this.validate();
    if (this.validateErrors()) {
      // some message
    } else {
      this.setState({ submitSuccess: true });

      console.log({
        title: this.state.title,
        description: this.state.description,
        category_id: this.state.categorySelected ? parseInt(this.state.categorySelected) : "",
        paid_event: this.state.paidEvent,
        event_fee: this.state.paidEvent ? parseInt(this.state.fee) : 0,
        reward: this.state.reward ? parseInt(this.state.reward) : 0,
        date: this.state.date+"T"+this.to24Hours(this.state.time), // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15) 
        duration: this.state.duration ? parseInt(this.state.duration) * 3600 : 0, // in seconds
        coordinator: {
          email: this.state.coordinators[this.state.coordinatorSelected].email,
          id: this.state.coordinatorSelected
        }
      });
      this.setState({ submitSuccess: true });
      window.scrollTo(0, 0);
    }
  };
  to24Hours = (val) => {
        if(this.state.pastMidday) {
            val = val.split(":");
            val[0] = parseInt(val[0]) + 12;
            return val.join(":");
                
        } else {
            return val;
        }
        
  }
  validateErrors = () => {
    // check fields
    return (
      this.validate("empty", this.state.title) ||
      this.validate("empty", this.state.description) ||
      this.validate("paid_empty", this.state.fee) ||
      this.validate("email", this.state.email) ||
      (this.validate("empty", this.state.date) || this.validate("empty", this.state.time))
    );
    // check if any of errors are present
  };
  validate(check, value) {
    switch (check) {
      case "empty":
        return value === "" ? true : false;
      case "paid_empty":
        return this.state.paidEvent && value === "" ? true : false;
      case "email": {
        // eslint-disable-next-line
        const regex = new RegExp(
          "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
        );
        return !regex.test(value) && value !== "" ? true : false;
      }
      default:
        this.setState({ titleError: this.validate("empty", this.state.title) });
        this.setState({
          descriptionError: this.validate("empty", this.state.description)
        });
        this.setState({
          feeError: this.validate("paid_empty", this.state.fee)
        });
        this.setState({ emailError: this.validate("email", this.state.email) });
        this.setState({ dateError: (this.validate("empty", this.state.date) || this.validate("empty", this.state.time))});
    }
  }

  // Handlers for fields state
  handleTitleChange = e => {
    this.setState({ titleError: this.validate("empty", e.target.value) }); //check if empty
    this.setState({ title: e.target.value });
  };
  handleDescriptionChange = e => {
    this.setState({ descriptionError: this.validate("empty", e.target.value) }); //check if empty
    this.setState({
      description: e.target.value.substring(0, this.state.descriptionLimit)
    });
  };
  handleCategoryChange = e => {
    if (!this.state.categoryClicked) this.setState({ categoryClicked: true });
    this.setState({ categorySelected: e.target.value });
  };
  handlePaymentChange = e => {
    if (e.target.id === "paid") {
      this.setState({ paidEvent: true });
    } else if (e.target.id === "free") {
      this.setState({ paidEvent: false });
      this.setState({ feeError: false });
    }
  };
  handleFeeChange = e => {
    let numValue = this.numbersOnly(e.target.value);
    this.setState({ feeError: this.validate("paid_empty", numValue) }); //check if empty & paid
    this.setState({ fee: numValue });
  };
  handleDurationChange = e => {
    this.setState({ duration: this.numbersOnly(e.target.value) });
  };
  handleRewardChange = e => {
    this.setState({ reward: this.numbersOnly(e.target.value) });
  };
  handleEmailChange = e => {
    this.setState({ emailError: this.validate("email", e.target.value) });
    this.setState({ email: e.target.value });
  };

  handleCoordinatorChange = e => {
    this.setState({ coordinatorSelected: e.target.value });
  };
  handleDateChange = e => {
    this.setState({ dateError: this.validate("empty", e.target.value) });
    //check if date is not before current date
    let dateVal = e.target.value;
    let today = moment().format(moment.HTML5_FMT.DATE);
    if (dateVal < today && dateVal !== "") dateVal = today;
    this.setState({ date: dateVal });
  };
  handleTimeChange = e => {
    this.setState({ dateError: this.validate("empty", e.target.value) });
    // ensure user cannot enter 24h time
    let timeVal = e.target.value;
    if (timeVal > "12:00" && timeVal !== "") timeVal= "12:00";
    this.setState({ time: timeVal });
  };
  handlePastMidday = e => {
    if (e.target.id === "am") {
      this.setState({ pastMidday: false });
    } else if (e.target.id === "pm") {
      this.setState({ pastMidday: true });
    }
  };
  //helper functions
  numbersOnly = input => {
    return input.replace(/\D/g, "");
  };

  render() {
    return (
      <div>
        {this.state.submitSuccess && (
          <ResponseBox title="Success">Event has been created.</ResponseBox>
        )}
        <div
          className={
            "form-container " +
            (this.state.submitSuccess && "form-container__idontfeelsogood")
          }
        >
          <BoxContainer title="About">
            <FieldContainer
              title="Title"
              errorMessage="Title cannot be empty"
              required
              error={this.state.titleError}
            >
              <InputField
                name="Title"
                inputType="text"
                placeholder="Make it short and clear"
                value={this.state.title}
                handler={this.handleTitleChange}
                error={this.state.titleError}
              />
            </FieldContainer>

            <FieldContainer
              title="Description"
              errorMessage="Description cannot be empty"
              required
              error={this.state.descriptionError}
            >
              <TextField
                name="Description"
                inputType="text"
                placeholder="Write about your event, be creative"
                value={this.state.description}
                handler={this.handleDescriptionChange}
                limit={this.state.descriptionLimit}
                error={this.state.descriptionError}
              />
            </FieldContainer>

            <FieldContainer title="Category">
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
              error={this.state.feeError}
            >
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
            <FieldContainer title="Reward">
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
            <FieldContainer title="Responsible" required>
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
              error={this.state.emailError}
            >
              <InputField
                name="Email"
                inputType="email"
                placeholder="Email"
                value={this.state.email}
                handler={this.handleEmailChange}
                error={this.state.emailError}
              />
            </FieldContainer>
          </BoxContainer>
          <BoxContainer title="When">
            <FieldContainer
              title="Starts on"
              required
              errorMessage="Start date required"
              error={this.state.dateError}
            >
              <DateField
                name="Date"
                handlerDate={this.handleDateChange}
                handlerTime={this.handleTimeChange}
                handlerPastMidday={this.handlePastMidday}
                valueDate={this.state.date}
                valueTime={this.state.time}
                pastMidday={this.state.pastMidday}
                error={this.state.dateError}
              />
            </FieldContainer>
            <FieldContainer title="Duration">
              <SmallInput
                name="Reward"
                placeholder="Number"
                handler={this.handleDurationChange}
                text="hours"
                value={this.state.duration}
              />
            </FieldContainer>
          </BoxContainer>
          <Button name="Publish event" handler={this.onFormSubmit} />
        </div>
      </div>
    );
  }
}
export default FormContainer;
