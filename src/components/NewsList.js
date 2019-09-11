import React, { Component } from "react"
import axios from "axios"
import NewsItem from "./NewsItem"
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners'
import FluidGrid from 'react-fluid-grid'

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

    const styleStrategies = [
      { mediaQuery: '(max-width: 719.9px)', style: { numberOfColumns: 1, gutterHeight: 0, gutterWidth: 0 } },
      { mediaQuery: '(min-width: 720px) and (max-width: 1023.9px)', style: { numberOfColumns: 2, gutterHeight: 0, gutterWidth: 0 } },
      { mediaQuery: '(min-width: 1024px)', style: { numberOfColumns: 3, gutterHeight: 0, gutterWidth: 0 } }
    ]

    return (
      <div style={newsStyle}>
        <h2 style={{opacity:".7", marginLeft:".6em"}}>News articles</h2>
        {this.state.news ?
          (<FluidGrid 
          
          styleStrategies={styleStrategies}>  
            {this.state.news.articles.map(news => 
                <NewsItem 
                  key={news.title}
                  data={news}
                />
              )}
          </FluidGrid>)
        :
          <div style={{textAlign:"center"}}> 
            <ClipLoader
              css={loadSpinner}
              color={"black"}
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
  marginTop: "4em",
  marginBottom: "10em",
}

export default NewsList