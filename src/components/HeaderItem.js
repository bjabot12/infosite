import React, { Component } from "react"
import { Button } from "@material-ui/core"

class HeaderItem extends Component {

  render() {
    return (
       <div style={headStyle}>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

const headStyle = {
  color: "black",
  flex: 1,
  textAlign: "center",
  opacity: ".6"
}

export default HeaderItem