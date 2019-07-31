import React, { Component } from "react"
import axios from "axios"
import NewsItem from "./NewsItem"

class NewsList extends Component {

  state = {
    news: null // Data from the news API
  }

  componentDidMount() {
    axios.get("https://cors-anywhere.herokuapp.com/https://us-central1-info-siden.cloudfunctions.net/news")
      .then(res => this.setState({news: res.data})
    )
  }

  render() {

    return(
      <div style={newsStyle}>
        {this.state.news &&
          <ul style={{listStyle: "none", align: "center", padding:"0"}}> {this.state.news.articles.map(news => 
            <NewsItem 
              key={news.title}
              data={news}
            />
            )}
          </ul>
        }
      </div>
    )
  }
}

const newsStyle = {
  marginLeft: "5%",
  marginRight: "5%",
  display: "flex",
  marginBottom: "10em"
}

export default NewsList