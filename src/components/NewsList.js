import React, { Component } from "react"
import axios from "axios"
import NewsItem from "./NewsItem"
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners'

class NewsList extends Component {

  _isMounted = false

  state = {
    news: null // Data from the news API
  }

  componentDidMount() {
    this._isMounted = true

    axios.get("https://cors-anywhere.herokuapp.com/https://us-central1-info-siden.cloudfunctions.net/news")
      .then(res => {
        if(this._isMounted) {
          this.setState({news: res.data})
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {

    return(
      <div style={newsStyle}>
        {this.state.news ?
          (<React.Fragment>
            <ul style={{listStyle: "none", align: "center", padding:"0"}}> {this.state.news.articles.map(news => 
              <NewsItem 
                key={news.title}
                data={news}
              />
              )}
            </ul>
          </React.Fragment>)
          :
          <div style={{marginLeft:"43%"}}> 
            <ClipLoader
              css={loadSpinner}
              color={"#ffffff"}
              size={"200"}
            />
          </div>
        }
      </div>
    )
  }
}

const loadSpinner = css`
    margin-top: 10em;
`;

const newsStyle = {
  marginLeft: "5%",
  marginRight: "5%",
  display: "flex",
  marginBottom: "10em"
}

export default NewsList