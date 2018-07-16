import { DATABASE_COLLECTIONS } from './database';

const API_URL = 'http://localhost:8000';
const ADD_ITEM_URL = API_URL + '/api/addDbItem';
const REQUEST_OPTIONS = {
  headers: { 'Access-Control-Allow-Origin': '*' },
};
export { DATABASE_COLLECTIONS, ADD_ITEM_URL, REQUEST_OPTIONS };
