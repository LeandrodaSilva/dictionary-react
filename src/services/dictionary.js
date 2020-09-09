import axios from 'axios';

const dictionary = axios.create({
  baseURL: "https://dictionary-express.herokuapp.com/"
});

export default dictionary;
