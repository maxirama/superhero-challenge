import Axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL_NAME = `https://superheroapi.com/api.php/${API_KEY}/search/`;
const API_URL_ID = `https://superheroapi.com/api.php/${API_KEY}/`;

const searchCharactersFromApi = (value) => {
  return Axios.get(API_URL_NAME + value);
};

export default searchCharactersFromApi;
