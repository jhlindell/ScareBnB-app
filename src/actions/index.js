import axios from 'axios';

export function selectProperty(property) {
  return {
    type: 'SELECT_PROPERTY',
    payload: property
  };
}

export function postProperty(property) {
  const url = 'http://localhost:8080/api/properties'
  const request = axios.post(url, property);
  console.log('post action sent');
  return {
    type: 'POST_PROPERTY',
    payload: request
  }
}

export function getAllProperties(){
  const url = 'http://localhost:8080/api/properties'
  const request = axios.get(url);

  return {
    type: 'GET_PROPERTIES',
    payload: request
  }
}
