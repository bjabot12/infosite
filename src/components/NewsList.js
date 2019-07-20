import React, { Component } from "react"
import axios from "axios"
import NewsItem from "./NewsItem"

class NewsList extends Component {

  state = {
    news: null // Data from the news API
  }

  componentDidMount() {
    const headers = {
      "country": "no",
      "X-Api-Key": "219a7abe739345e4a89e19dbdce17ef0"
    }
    // axios.get("https://newsapi.org/v2/top-headlines", {headers})
    //   .then(res => this.setState({news: res.data})
    // )}

    axios.get("https://newsapi.org/v2/top-headlines?country=no&apiKey=219a7abe739345e4a89e19dbdce17ef0")
      .then(res => this.setState({news: res.data})
    )}

  render() {
    console.log(this.state.news)
    return(
      <div style={newsStyle}>
        {this.state.news &&
          <ul style={{listStyle: "none", align: "center", padding:"0"}}>{this.state.news.articles.map(news => 
            <li>
              <NewsItem 
                key={news.description} 
                data={news}
              />
            </li>
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