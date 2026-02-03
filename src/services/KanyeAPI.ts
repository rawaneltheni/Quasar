import API from './API.js';

const kanyeAPI = API('https://api.kanye.rest/');

export default {
  getKanyeQuote() {
    return kanyeAPI.get('/');
  },
};
