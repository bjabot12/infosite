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
  color: "white",
  flex: 1,
  textAlign: "center",
  textShadow: "0px 2px 3px #333333",
  //borderBottom: ".25em solid #75a6d7",
}

export default HeaderItem