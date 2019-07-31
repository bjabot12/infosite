import React, { Component } from "react"

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
  opacity: ".7",
  fontSize: ".9em"
}

export default HeaderItem