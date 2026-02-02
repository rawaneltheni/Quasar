import axios from 'axios';

export default function API(url: string = 'https://api.kanye.rest/') {
  return axios.create({
    baseURL: url,
  });
}
