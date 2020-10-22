import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://nc-news-psd.herokuapp.com/api',
});

export const getArticleById = (article_id) => {
    return instance.get(`/articles/${article_id}`)
}

export const increaseVotesById = (article_id, voteValue) => {
    return instance.patch(`/articles/${article_id}`, 
    {inc_votes: voteValue,})
}