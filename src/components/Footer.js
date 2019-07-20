import React, { Component } from "react"

class Footer extends Component {

  render() {
    return (
      <div style={footerStyle}>
        <p>Football data provided by the Football-Data.org API</p>
        <p>Weather data provided by the openweathermap.org API</p>
        <p>News data provided by the newsapi.org API</p>
      </div>
    )
  }
}

const footerStyle = {
  backgroundColor: "black",
  color: "white",
  position: "absolute",
  bottom: 0,
  width: "100%",
  textAlign: "center",
  opacity: ".4"
}

export default Footer