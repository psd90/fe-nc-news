import React from "react";
import {Link} from '@reach/router';
import VoteUpdater from './VoteUpdater'


const ArticleCard = (props) => {
    const time = props.created_at.slice(0,10)
    const preview = props.body.slice(0,200)
  return (
  <section className="Article_Card">
      <Link 
      to={`/articles/${props.article_id}`}> 
      {props.title}
      </Link>
      <VoteUpdater 
      votes={props.votes} 
      article_id={props.article_id} />
      <h5>'{preview}...'</h5>
      <h4>Comments : {props.comment_count}</h4>
      <h6>Written by  {props.author} : {time}</h6>
  </section> 
  )
};

export default ArticleCard;
