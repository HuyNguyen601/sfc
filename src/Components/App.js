import React, { Component } from 'react'
import logo from '../logo.svg'
import '../Styles/App.css'
import Navigation from './Navigation'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import 'typeface-roboto'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
