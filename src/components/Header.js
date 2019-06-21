import React, {Component} from "react"
import HeaderItem from "./HeaderItem"
import { Link } from "react-router-dom"
import { positions } from "@material-ui/system";

export class Header extends Component {

  state = {
    date: new Date().toDateString(),
    time: new Date().toLocaleTimeString()
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }

  render() {
    return (
      <React.Fragment>
        <div style={headlist}>
          <Link style={linkStyle} to="/">
            <HeaderItem name="Football" />
          </Link>
          <hr/>
          <Link style={linkStyle} to="/weather">
            <HeaderItem name="Weather" />
          </Link>
          <hr/>
          <Link style={linkStyle} to="/news">
            <HeaderItem name="News" />
          </Link>
        </div>
        <div style={{marginTop: "5em"}}>
          <div style={clockStyle}>
            <h2 style={{textAlign: "center", color: "white"}}>{this.state.date}</h2>
            <h2 style={{textAlign: "center", color: "white"}}>{this.state.time}</h2>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const headlist = {
  display: "flex",
  background: "#696969",
  position: "fixed",
  top: 0, 
  width: "100%",
  //marginTop: "0em",
  //marginBottom: "1em"
  //backgroundImage: "linear-gradient(#333333, #454545)"
}

const linkStyle = {
  textDecoration: "none",
  flex: 1
}

const clockStyle = {
  border: "1px black solid",
  marginLeft: "25%",
  marginRight: "25%",
  borderRadius: "7px",
  backgroundColor: "#75a6d7",
  backgroundImage: "linear-gradient(#75a6d7, #4286f4)",
  textShadow: "0px 2px 3px #555"
}

export default Header