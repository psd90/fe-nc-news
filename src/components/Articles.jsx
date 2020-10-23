import React, { Component } from "react";
import axios from 'axios';
import Loader from "./Loader"
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: "",
    order: ""
  }

  fetchArticles = () => {
    const {topic} = this.props
    axios.get('https://nc-news-psd.herokuapp.com/api/articles', 
    {params: {topic, order:this.state.order , sort_by:this.state.sortBy}})
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
  handleChange2 = (event) => {
    const {value} = event.target
    this.setState({order:value})
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.topic !== this.props.topic) {
      this.fetchArticles()
    }
    if(prevState.sortBy !== this.state.sortBy) {
      this.fetchArticles()
    }
    if(prevState.order !== this.state.order) {
      this.fetchArticles()
    }
  }
  render() {
    const {articles, isLoading} = this.state
    if (isLoading) return <Loader />
    console.log(this.state.order)
    return (
      <main>
        <select onChange={this.handleChange}>
          <option value="" disabled selected hidden>Sort by</option>
          <option value="comment_count">comment count</option>
          <option value="votes">votes</option>
        </select>
        <select onChange={this.handleChange2}>
          <option value="" disabled selected hidden>Order</option>
          <option value="desc">highest</option>
          <option value="asc">lowest</option>
        </select>
        {articles.map(article => {
          return <ArticleCard {...article} key={article.article_id}/>
        })}
      </main>
    )

  }
}; 

export default Articles;
