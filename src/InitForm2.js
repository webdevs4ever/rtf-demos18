import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './InitForm2.css';

class InitForm2 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      formErrors: {firstName: '', lastName: ''},
      firstNameValid: false,
      lastNameValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;

    switch(fieldName) {
      case 'firstName':
      firstNameValid = value.length >= 2;
      fieldValidationErrors.firstName = firstNameValid ? '': ' is too short';
        break;
      case 'lastName':
        lastNameValid = value.length >= 2;
        fieldValidationErrors.lastName = lastNameValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    firstNameValid: firstNameValid,
                    lastNameValid: lastNameValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.firstNameValid && this.state.lastNameValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

 

  render () {
    return (
      <form className="demoForm2">
        <div className="demo-txt2">ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.</div>
        <div className="error-msg">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        
        <div className="join-txt2">Join the List!
        </div>    
        <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
          <input type="textarea" required className="firstName2" name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.lastName)}`}>
          <input type="textarea" className="lastName2" name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleUserInput}  />
        </div>
        <div className="btn2">
        <input type="button" className="btn2-primary" 
        onClick={() => this.props.history.push("/congrats")}
        disabled={!this.state.formValid} value="Sign Up" />
        </div>
        
        
      </form>
    )
  }
}

export default InitForm2;