import React, { Component } from "react"
import axios from "axios"
import { Table, TableBody, TableCell, TableRow, Paper } from "@material-ui/core"
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners'

class Weather extends Component {

  _isMounted = false

  state = {
    os: null, // Data from the weather API
  }

  componentDidMount() {
    this._isMounted = true

    axios.get("https://cors-anywhere.herokuapp.com/https://info-backend1.herokuapp.com/weather")
    .then(res => {
      if(this._isMounted) {
        this.setState({os: res.data})
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false
  }
  
  render() {

    return (
      <div style={weatherStyle}>
        {this.state.os ? (
          <React.Fragment>
            <h2 style={{color:"black", opacity:".7"}}>{this.state.os.name}</h2>
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
        )
        :
        <div style={{textAlign:"center"}}> 
          <ClipLoader
            css={loadSpinner}
            color={"black"}
            size={"200"}
          />
        </div>}
      </div>
    )
  }
}

const loadSpinner = css`
    margin-top: 10em;
`;

const weatherStyle = {
  color: "white",
  marginLeft: "5%",
  marginRight: "5%",
  paddingTop: ".5em",
  marginBottom: "10em"
}

export default Weather