import React, {Component} from 'react'
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom"
import './App.css'

import MatchList from "./components/MatchList"
import Header from "./components/Header"
import Weather from "./components/Weather"
import Footer from "./components/Footer"
import News from "./components/News"

export class App extends Component {

  render() {
    return (
      <Router>
        <div className="App" >
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Header />
              <MatchList />
              <Footer />
            </React.Fragment>
          )}>  
          </Route>
          <Route path="/weather" render={props => (
            <React.Fragment>
              <Header />
              <Weather />
              <Footer />
            </React.Fragment>
          )}>
          </Route>
          <Route path="/news" render={props => (
            <React.Fragment>
              <Header />
              <News />
              <Footer />
            </React.Fragment>
          )}>
          </Route>
        </div>
      </Router>
    )
  }
}

export default App
