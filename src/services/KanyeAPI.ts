import API from "./API";

export default {
  getQoute() {
    return API().get('/');
  },
};
