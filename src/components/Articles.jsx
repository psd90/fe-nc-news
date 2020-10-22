import React, { Component } from "react";
import axios from 'axios';
import Loader from "./Loader"
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: ""
  }

  fetchArticles = () => {
    const {topic} = this.props
    axios.get('https://nc-news-psd.herokuapp.com/api/articles', 
    {params: {topic, order:'', sort_by:this.state.sortBy}})
    .then(({data:{articles}}) => {
      this.setState({articles, isLoading:false})
    })
  }
  componentDidMount() {
    this.fetchArticles()
    
  }
  handleChange = (event) => {
    const {value} = event.target
    this.setState({sortBy:value})
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.topic !== this.props.topic) {
      this.fetchArticles()
    }
    if(prevState.sortBy !== this.state.sortBy) {
      this.fetchArticles()
    }
  }
  render() {
    const {articles, isLoading} = this.state
    if (isLoading) return <Loader />
    console.log(this.state.sortBy)
    return (
      <main>
        <select onChange={this.handleChange}>
          <option value="comment_count">comment count</option>
          <option value="votes">votes</option>
        </select>
        {articles.map(article => {
          return <ArticleCard {...article} key={article.article_id}/>
        })}
      </main>
    )

  }
}; 

export default Articles;
