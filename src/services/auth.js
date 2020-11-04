import axios from 'axios';

const auth = axios.create({
  baseURL: "https://dictionary-express.herokuapp.com/auth/"
});

export default auth;
