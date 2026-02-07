import { kanyeAPI } from '../../axios.js';

// MAKE YOUR FUNCTIONS THAT USE THE SHARED BASEURL API
export function getQuote() {
  return kanyeAPI.get('/');
}
