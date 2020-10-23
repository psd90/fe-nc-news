import React, { Component } from 'react';
import Loader from './Loader';
import ErrorDisplay from './ErrorDisplay';
import { getArticleById } from '../api';
import {Link} from '@reach/router';
import  VoteUpdater  from './VoteUpdater';


class Article extends Component {
    state = {
        articleInfo: {},
        isLoading: true,
        error: null
    };


    componentDidMount() {
        getArticleById(this.props.article_id)
        .then(({data}) => {
            this.setState({articleInfo:data.article, isLoading:false});
        })
        .catch(({response}) => {
            this.setState({
            error: {
                    status: response.status,
                    message: response.data.msg, 
                }              
            })
        })
    }
   render() {
       const {articleInfo, isLoading, error} = this.state
       if (error) return <ErrorDisplay {...error}/>;
       if(isLoading) return <Loader />;
       console.log(articleInfo)
       return (
           <main className="single-article-page">
               <h2>{articleInfo.title}</h2>
               <p>Topic : {articleInfo.topic}</p>
               <p>Written date : {articleInfo.created_at.slice(0,10)} by `{articleInfo.author}`</p>
               <h4>{articleInfo.body}</h4>
               <VoteUpdater votes={articleInfo.votes} article_id={articleInfo.article_id}/>
               <Link to={`/articles/${articleInfo.article_id}/comments`}> Comments : {articleInfo.comment_count} </Link>
           </main>
       )
   }
}

export default Article;