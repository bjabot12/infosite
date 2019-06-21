import React, { Component } from "react"
import { RSA_NO_PADDING } from "constants";

class Footer extends Component {

  render() {
    
    return (
      <div style={footerStyle}>
        <p>Football data provided by the Football-Data.org API</p>
        <p>Weather data provided by the openweathermap.org API</p>
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
  //height: "100px"
}

export default Footer