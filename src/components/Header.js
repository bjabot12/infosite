import React, {Component} from "react"
import HeaderItem from "./HeaderItem"
import { Link } from "react-router-dom"

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
          <div style={{display:"flex"}}>
            <Link style={linkStyle} to="/">
              <HeaderItem name="News " />
            </Link>
            <Link style={linkStyle} to="/weather">
              <HeaderItem name="Weather " />
            </Link>
            <Link style={linkStyle} to="/football">
              <HeaderItem name="Football " />
            </Link>
          </div>
        </div>
        <div style={{marginTop: "6em"}}>
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
  backgroundImage: "linear-gradient(45deg, rgba(63, 191, 191, 1), rgba(54, 97, 255, 1) 100%)",
  zIndex: "1"
}

const linkStyle = {
  textDecoration: "none",
  flex: 1
}

const clockStyle = {
  marginLeft: "25%",
  marginRight: "25%",
  opacity: ".7",
}

export default Header