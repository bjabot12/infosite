import React, { Component } from "react"

class MatchItem extends Component {

  render() {

    const date = this.props.data.utcDate
    let finalDate = date.split("T")
    let times = finalDate[1].split("Z")
    let clock = times[0].split(":")
    let hour = parseInt(clock[0]) + 2
    if (hour.toString().length === 1) {
      hour = "0" + hour
    } else if (hour === 24 ) {
      hour = "00"
    }

    return (
      <div style={divStyle}>
        <p style={compStyle}>{this.props.data.competition.name}</p>
        <p style={teamStyle}>{this.props.data.homeTeam.name} - {this.props.data.awayTeam.name}</p>
        <p style={timeStyle}>{hour+":"+clock[1]}</p>
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