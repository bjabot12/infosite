import React, { Component } from "react"

class MatchItem extends Component {

  render() {

    const date = this.props.data.utcDate
    let finalDate = date.split("T")

    return (
      <div style={divStyle}>
        <p style={compStyle}>{this.props.data.competition.name}</p>
        <p style={teamStyle}>{this.props.data.homeTeam.name} - {this.props.data.awayTeam.name}</p>
        <p style={timeStyle}>{finalDate[0]}<br/>{finalDate[1].split("Z")}</p>
      </div>
    )
  }
}

const teamStyle = {
  flex: 1,
  textAlign: "center"
}

const compStyle ={
  flex: 1,
  textAlign: "left",
  paddingLeft: "1em"
}

const timeStyle = {
  flex: 1,
  textAlign: "right",
  paddingRight: "1em"
}

const divStyle = {
  padding: ".1em",
  display: "flex",
  margin: ".5em",
  color: "black"
}

export default MatchItem