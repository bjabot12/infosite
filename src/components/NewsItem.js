import React, { Component } from "react"
import { Paper } from "@material-ui/core"

class NewsItem extends Component {

  render() {
    return(
      
      <div style={nItemStyle}>
        <Paper style={{height:"20em", padding:".5em"}}>
          <a style={{textDecoration:"none", color:"black"}} href={this.props.data.url} target="blank">
            <div>
              <img style={imgStyle} src={this.props.data.urlToImage} />
              <h4>{this.props.data.title}</h4>
              <p>{this.props.data.description}</p>
            </div>
          </a>
          </Paper>
      </div>
      
    )
  }
}

const nItemStyle = {
  display: "inline",
  float: "left",
  width: "47%",
  height: "20em",
  margin: "1em"
 
}

const imgStyle = {
  width: "45%",
  height: "45%"
}

export default NewsItem