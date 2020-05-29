const axios = require("axios");

module.exports = api;

const api = {
    getUser(username) {
        const queryURL = 'https://api.github.com/users/${username}'
        return axios.get(queryURL);
    }
};

