import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader';

class Article extends Component {
    state = {
        articleInfo: {},
        isLoading: true
    }
    componentDidMount() {
        axios.get(`https://nc-news-psd.herokuapp.com/api/articles/${this.props.article_id}`)
        .then(({data}) => {
            this.setState({articleInfo:data.article, isLoading:false})
        })
    }
   render() {
       const {articleInfo, isLoading} = this.state
       if(isLoading) return <Loader />;
       return (
           <main className="single-article-page">
               <h2>{articleInfo.title}</h2>
               <p>Topic : {articleInfo.topic}</p>
       <p>Written date : {articleInfo.created_at.slice(0,10)} by `{articleInfo.author}`</p>
               <h4>{articleInfo.body}</h4>
               <p>Votes: {articleInfo.votes}</p>
               <p>Comments: {articleInfo.comment_count}</p>
           </main>
       )
   }
}

export default Article;