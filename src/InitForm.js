import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './InitForm.css';

class InitForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }

    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid})
  }
  
  

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <div id="page">
      <form className="demoForm">
        
        <div className="demo-txt"> SIGN UP FOR THE TLC NEWSLETTER.
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div></div>
        <div className="join-txt">Join the List!
        </div>    
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
    
        <input type="textarea" required className="form-control" name="email"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
      <div className="chkbox">
        <div className="chkbox-txt">
        <input type="checkbox" className="check1"  />
        <p>I agree to receive information from Discovery Communications 
    in accordance with the following <a href="https://corporate.discovery.com/privacy-policy/">Privacy Policy</a></p>
    </div>  
    </div>
    <div className="btn1">
        <input type="button" className="btn1-primary" 
        onClick={() => this.props.history.push("/sign-up")}
        disabled={!this.state.formValid} value="Next" />
        </div>
        
      </form>
      </div>
    )
  }
}

export default InitForm;

