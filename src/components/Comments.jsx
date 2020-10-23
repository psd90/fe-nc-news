import React from "react";
import Loader from "./Loader";
const axios = require("axios");



class Comments extends React.Component {
  state = {
    comments: [],
    isLoading: true,
  };
  componentDidMount() {
    axios
      .get(
        `https://nc-news-psd.herokuapp.com/api/articles/${this.props.article_id}/comments`
      )
      .then((res) => {
        this.setState({
          comments: res.data.comments,
          isLoading: false,
        });
      });
  }
  updateComments = (newComment) => {
    this.setState((currState) => ({
      comments: [newComment, ...currState.comments],
    }));
  };
  deleteComment = (comment_id) => {
    this.setState((prevState) => {
      const newComments = prevState.comments.filter((comment) => {
        return comment_id !== comment.comment_id;
      });
      return {
        comments: newComments,
      };
    });
    axios.delete(
      `https://nc-news-psd.herokuapp.com/api/comments/${comment_id}`
    );
  };
  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <div>
        {this.state.comments.map((comment) => {
          return (
              <div>
                <h4>{comment.author}</h4>
                <h6>{comment.created_at.slice(0,10)}</h6>
                <p>{comment.body}</p>
                {<button onClick={()=> this.deleteComment(comment.comment_id)}>
					DELETE
				</button>}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Comments;