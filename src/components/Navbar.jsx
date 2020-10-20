import React, { Component } from 'react';
import { Link } from "@reach/router";
import axios from 'axios';

class Navbar extends Component {
    state = {
        topics: []
    }
    componentDidMount(){
        axios.get('https://nc-news-psd.herokuapp.com/api/topics')
        .then(({data: {topics}}) => {
            this.setState({topics})
        })
    }
    render () {
        const {topics} = this.state
        return (
            <nav>
                {topics.map(topic => {
                    // console.log(topic)
                    return <Link to={`/topics/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
                })}
            </nav>
        )
    }
}

export default Navbar;