// api.ts
import axios from 'axios';

export default function API(baseURL: string) {
  return axios.create({
    baseURL,
  });
}
