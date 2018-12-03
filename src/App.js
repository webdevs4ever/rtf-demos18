import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import InitForm2 from './InitForm2.js'
import InitForm from './InitForm.js'
import Congrats from './Congrats.js'
import Placeholder from './Placeholder'

class App extends Component {
  render() {
    return (
      <div className="App center-flex">
        <Router>
          <Switch>
            <Route path="/initform" component={InitForm} />
            <Route path="/sign-up" component={InitForm2} />
            <Route path="/congrats" component={Congrats} />
            <Route path="/placeholder" component={Placeholder} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;