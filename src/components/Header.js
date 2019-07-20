import React, {Component} from "react"
import HeaderItem from "./HeaderItem"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"

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
          <div style={{width:"33%", display:"flex"}}>
            <Link style={linkStyle} to="/">
              <HeaderItem name="News" />
            </Link>
            <Link style={linkStyle} to="/weather">
              <HeaderItem name="Weather" />
            </Link>
            <Link style={linkStyle} to="/football">
              <HeaderItem name="Football" />
            </Link>
          </div>
        </div>
        <div style={{marginTop: "5em"}}>
          <div style={clockStyle}>
            <h2 style={{textAlign: "center", color: "black"}}>{this.state.date}</h2>
            <h2 style={{textAlign: "center", color: "black"}}>{this.state.time}</h2>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const headlist = {
  background: "white",
  position: "fixed",
  top: 0, 
  width: "100%",
  opacity: "1",
  backgroundImage: "linear-gradient(45deg, rgba(63, 191, 191, 1), rgba(13, 17, 198, 1) 100%)",
  zIndex: "1"
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
  backgroundColor: "white",
  opacity: ".3",
}

export default Header