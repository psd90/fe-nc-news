import React, { Component } from "react";
import axios from 'axios';
import Loader from "./Loader"
import ArticleCard from "./ArticleCard"

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
  }

  fetchArticles = () => {
    const {topic} = this.props
    axios.get('https://nc-news-psd.herokuapp.com/api/articles', {params: {topic}}).then(({data:{articles}}) => {
      this.setState({articles, isLoading:false})
      console.log(articles[0])
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
    const {articles, isLoading} = this.state
    if (isLoading) return <Loader />
    return (
      <main>
        {articles.map(article => {
          return <ArticleCard {...article} key={article.article_id}/>
        })}
      </main>
    )

  }
}; 

export default Articles;
