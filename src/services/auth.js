import axios from 'axios';

const auth = axios.create({
  baseURL: "https://reqres.in/"
});

export default auth;
