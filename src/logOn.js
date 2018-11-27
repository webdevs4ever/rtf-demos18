import React, { Component } from 'react'
import { FormErrors } from './FormErrors'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './logon.css'

class logOn extends Component {
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

  /* add prevent default method here  */
  
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
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
                    
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid});
  }
   

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
        <div className="outer">
      <form className="demoForm">
        <h2 className="demo-txt"> REGISTER HERE FOR FREE NEXT DAY SHIPPING!</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
        
          <input type="textarea" required className="form-control" name="email"
            placeholder="Email address"
            value={this.state.email} 
            onChange={this.handleUserInput}  />
            </div>
          <div>  
          <input type="textarea" required className="form-control2" name="password"
            placeholder="Password"
            value={this.state.password} 
            onChange={this.handleUserInput}  />
        </div>
      <div className="chkbox">
        <div className="chkbox-txt">
        <input type="checkbox" className="check1"  />
        <p>I agree to the terms and conditions of the Publicis <a href="https://www.publicisresolute.com/privacy-policy/">Privacy Policy</a></p>
    </div>  
    </div>
    <div className="btn1">
        <button type="submit" className="btn1-primary" 
        onClick={() => this.props.history.push("/sign-up")}
        disabled={ !this.state.formValid }>Next</button>
        </div>
        
      </form>
    </div>
    )
  }
}

export default logOn;

