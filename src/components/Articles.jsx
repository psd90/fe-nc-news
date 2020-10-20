import React, { Component } from "react";
import axios from 'axios';
import Loader from "./Loader"

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
  }

  fetchArticles = () => {
    const {topic} = this.props
    axios.get('https://nc-news-psd.herokuapp.com/api/articles', {params: {topic}}).then(({data:{articles}}) => {
      this.setState({articles, isLoading:false})
    })
  }
  componentDidMount() {
    this.fetchArticles()
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.topic !== this.props.topic) {
      this.fetchArticles()
    }
  }
  render() {
    console.log(this.props)
    const {articles, isLoading} = this.state
    if (isLoading) return <Loader />
    console.log(articles)
    return (
      <main>
        {articles.map(article => {
          return <section key={article.article_id}>{article.title}</section>
        })}
      </main>
    )

  }
}; 

export default Articles;
