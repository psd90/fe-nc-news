import React from "react";
import {Link} from '@reach/router';



const ArticleCard = (props) => {
    const time = props.created_at.slice(0,10)
    const preview = props.body.slice(0,200)
  return (
  <section className="Article_Card">
      <Link to={`/articles/${props.article_id}`}> 
      <h1>{props.title}</h1> </Link>
      <h4>Votes : {props.votes}</h4>
      <h5>'{preview}...'</h5>
      <h4>Comments : {props.comment_count}</h4>
      <h6>Written by  {props.author} : {time}</h6>
  </section> 
  )
};

export default ArticleCard;
