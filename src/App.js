import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import InitForm2 from './InitForm2.js'
import InitForm from './InitForm.js'
import Congrats from './Congrats.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        
        <Router>
        <div>
          <Route path="/initform" component={InitForm} />
          <Route path="/sign-up" component={InitForm2} />
          <Route path="/congrats" component={Congrats} />
          </div>
        </Router>
        

      </div>
    );
  }
}

export default App;