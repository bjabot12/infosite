import React, { Component } from "react"
import { Paper } from "@material-ui/core"

class NewsItem extends Component {

  render() {
    
    return (
      <div style={nItemStyle}>
        <a style={{textDecoration:"none", color:"black"}} href={this.props.data.url} target="blank">
          <Paper style={{padding:".5em"}}>
            <div>
              <img style={imgStyle} src={this.props.data.urlToImage} alt="Not provided by the API"/>
              <h4>{this.props.data.title}</h4>
              <p>{this.props.data.description}</p>
            </div>  
          </Paper>
        </a>
      </div>
      
    )
  }
}

const nItemStyle = {
  margin: "1em",
  fontSize: ".9em",
}

const imgStyle = {
  width: "30%",
  height: "30%"
}

export default NewsItem