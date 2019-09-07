import React, { Component } from "react"
import MatchItem from "./MatchItem"
import { Paper } from "@material-ui/core"
import axios from "axios"
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners'

class MatchList extends Component {
  _isMounted = false

  state = {
    data: null // API response from the football-API
  }

  componentDidMount() {
    this._isMounted = true

    axios.get("https://cors-anywhere.herokuapp.com/https://us-central1-info-siden.cloudfunctions.net/football")
    .then(res => {
      if(this._isMounted) {
        this.setState({data: res.data})
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {

    return (
      <div style={matchListStyle}>
        {this.state.data ? 
          (<React.Fragment>
            {this.state.data.count !== 0 ? (
              <React.Fragment>
                <h2 style={{color: "white"}}>Todays Matches</h2>
                <Paper>
                  {this.state.data.matches.map(match => <MatchItem 
                    key={match.id} 
                    data={match}
                  />)}
                </Paper>
              </React.Fragment>
            )
            :
            (<div style={noMatchStyle}>
              <h2 style={{paddingTop: "1em", paddingBottom: "1em", flex: 1, color: "black"}}>No matches scheduled for today was received by the API</h2>
            </div>)}
          </React.Fragment>
        )
        :
        <div style={{textAlign:"center"}}> 
          <ClipLoader
            css={loadSpinner}
            color={"#ffffff"}
            size={"200"}
          />
        </div>
        }
      </div>
    )
  }
}

const loadSpinner = css`
    margin-top: 10em;
`;

const noMatchStyle = {
  marginTop: ".8em",
  textAlign: "center",
  background: "rgba(255, 255, 255, 0.2)",
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