import axios from 'axios';
const LOCAL_URL = 'http://localhost:8080/api/properties';
const HEROKU_URL = 'https://scarebnb-db.herokuapp.com/api/properties';
const URL = HEROKU_URL;
export function selectProperty(property) {
  return {
    type: 'SELECT_PROPERTY',
    payload: property
  };
}

export function postProperty(property) {
  const url = URL;
  const request = axios.post(url, property);

  return {
    type: 'POST_PROPERTY',
    payload: request
  }
}

export function getAllProperties(){
  const url = URL;
  const request = axios.get(url);

  return {
    type: 'GET_PROPERTIES',
    payload: request
  }
}
