import React, { Component } from "react"
import axios from "axios"
import { Table, TableBody, TableCell, TableRow, Paper } from "@material-ui/core"

class Weather extends Component {

  state = {
    os: null, // Data from the weather API
    stavva: null // Data from the weather API
  }

  componentDidMount() {
    const headers = {
      "q": "Osoyro, no",
      "appdid": "aabdb65e30e3d10785afe7794bf417ba"
    }
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Osoyro,no&appid=aabdb65e30e3d10785afe7794bf417ba")
    .then(res => this.setState({os: res.data})
  )}
  
  render() {
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
  marginLeft: "5%",
  marginRight: "5%",
  paddingTop: ".5em",
}

export default Weather