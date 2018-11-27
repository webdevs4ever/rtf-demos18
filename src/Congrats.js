import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Congrats.css';

class Congrats extends Component {
  constructor (props) {
    super(props);
    this.state = {
      
    }
  }

  
  render () {
    return (
      <div className="demoForm3">
        <div className="demo-txt3"> Congratulations!</div>
        
        <div className="join-txt3">Thank You For Signing Up!<br />
<span className="join-txt-sm">Look out for the latest news on your favorite shows</span></div>            
            
        
</div>
      
    )
  }
}

export default Congrats;

