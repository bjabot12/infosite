import React, { Component } from "react"
//import axios from "axios"
import Match from "./Match"
import TestMatches from "../TestMatches.json"
import { Paper } from "@material-ui/core"

class MatchList extends Component {

  state = {
    matches: TestMatches.matches
  }
    //this.getMatches = this.getMatches.bind(this)
  
  // getMatches() {
  //   const headers = {
  //     "X-Auth-Token": "e88b0885832c40d2bc5a53db4bdc1ba7"
  //   }
  //   axios.get("http://api.football-data.org/v2/matches", {headers})
  //     .then(res => {
  //       const matches = res.data
  //       console.log(matches)
  //       //this.setState({matches})
  //     })
  // }

  // componentDidMount() {
  //   this.getMatches()
  // }

  render() {

    return (
      <div style={matchListStyle}>
        <h2 style={{color: "white", textShadow: "0px 2px 3px #555"}}>Todays Matches</h2>
        <Paper >
          {console.log(this.state)}
          {this.state.matches.map(match => <Match 
            key={match.id} 
            data={match}
          />)}
          {this.state.matches.map(match => <Match 
            key={match.id} 
            data={match}
          />)}
          {this.state.matches.map(match => <Match 
            key={match.id} 
            data={match}
          />)}
        </Paper>
      </div>
    )
  }
}

const matchListStyle = {
  paddingTop: ".5em",
  //marginTop: "5em",
  marginLeft: "5%",
  marginRight: "5%",
  marginBottom: "10em"
}

export default MatchList
//{this.state.matches.map(match => <li>{match.id}</li>)}