import axios from 'axios';
const apiUrl = "https://dictionary-express.herokuapp.com/";
const dictionary = axios.create({
  baseURL: apiUrl
});

export default dictionary;
export const DICTIONARY_URL = apiUrl;
