import React, { Component } from "react"
import Match from "./Match"
import { Paper } from "@material-ui/core"
import axios from "axios"

class MatchList extends Component {

  state = {
    matches: null
  }

  componentDidMount() {
    const headers = {
      "X-Auth-Token": "e88b0885832c40d2bc5a53db4bdc1ba7"
    }
    axios.get("http://api.football-data.org/v2/matches", {headers})
    .then(res => this.setState({matches: res.data})
  )}

  render() {
    return (
      <div style={matchListStyle}>
        {this.state.matches && 
          (<React.Fragment>
            {this.state.matches.count !== 0 ? (
              <React.Fragment>
                <h2 style={{color: "white", textShadow: "0px 2px 3px #555"}}>Todays Matches</h2>
                <Paper >
                  {this.state.matches.map(match => <Match 
                    key={match.id} 
                    data={match}
                  />)}
              </Paper>
            </React.Fragment>)
            :
            (<div style={noMatchStyle}>
              <h2 style={{paddingTop: "1em", paddingBottom: "1em", flex: 1, color: "#333333"}}>No matches scheduled for today was received by the API</h2>
            </div>)}
          </React.Fragment>
        )}
      </div>
    )
  }
}

const noMatchStyle = {
  marginTop: ".8em",
  textAlign: "center",
  backgroundColor: "white",
  marginLeft: "5%",
  marginRight: "5%",
  borderRadius: ".6em",
  display: "flex"
}

const matchListStyle = {
  paddingTop: ".5em",
  marginLeft: "5%",
  marginRight: "5%",
  marginBottom: "10em"
}

export default MatchList