import React from "react";

const ArticleCard = (props) => {
    const time = props.created_at.slice(0,10)
  return (
  <section className="Article_Card">
      <h2>{props.title}</h2>
      <h4>{props.votes}</h4>
      <h6>{props.author}</h6> 
      <h6>{time}</h6>
  </section> 
  )
};

export default ArticleCard;
