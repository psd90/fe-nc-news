import React, {Component} from 'react';
import {increaseVotesById} from '../api'

class VoteUpdater extends Component {
    state = {
        userVoteCount: 0
    }

 handleVote = (voteValue) => {
        this.setState((currentState) => {
            return { userVoteCount: currentState.userVoteCount + voteValue}
        })

    const {article_id} = this.props;
    increaseVotesById(article_id, voteValue)
        .catch(() => {
            this.setState((currentState) => {
                return {userVoteCount: currentState.userVoteCount - voteValue}
            })
        })
    };
    render() {
    const {votes} = this.props;
    const {userVoteCount} = this.state;

    return (
        <div>
            <button onClick={() => this.handleVote(1)} value={1}> UpVote </button>
                <p>Votes : {votes + userVoteCount}</p>
            <button onClick={() => this.handleVote(-1)} value={-1}> DownVote </button>
        </div>
    )
  }
}
export default VoteUpdater;