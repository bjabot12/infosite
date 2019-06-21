import React, { Component } from "react"
import axios from "axios"

import { Table, TableBody, TableCell, TableRow,
Paper } from "@material-ui/core"

class Weather extends Component {

  state = {
    os: null,
    stavva: null
  }
  
  // getWeather = () => {
  //   axios.get("https://api.openweathermap.org/data/2.5/weather?q=Osoyro,no&appid=aabdb65e30e3d10785afe7794bf417ba")
  //     .then(res => {
  //       const data = res.data
  //       console.log(data.main.temp)
  //       this.setState({data})
  //     })
  // }

  componentDidMount() {
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Osoyro,no&appid=aabdb65e30e3d10785afe7794bf417ba")
    .then(res => this.setState({os: res.data})
  )}
  
  render() {
    console.log(this.state.stavva)
    return (
      <div style={weatherStyle}>
        {this.state.os && (
          <React.Fragment>
            <h2>{this.state.os.name}</h2>
            <Paper>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Cloudiness</TableCell>
                    <TableCell>{this.state.os.weather[0].description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Current temp</TableCell>
                    <TableCell>{Math.floor(this.state.os.main.temp - 273)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Max temp</TableCell>
                    <TableCell>{Math.floor(this.state.os.main.temp_max - 273)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Wind</TableCell>
                    <TableCell>{this.state.os.wind.speed} m/s</TableCell>
                  </TableRow>
                </TableBody>  
              </Table>
            </Paper>
          </React.Fragment>
        )}  
      </div>
    )
  }
}

const weatherStyle = {
  color: "white",
  //margin: "5%"
  //padding: "5%",
  //marginTop: "5em",
  marginLeft: "5%",
  marginRight: "5%",
  paddingTop: ".5em"
}

export default Weather