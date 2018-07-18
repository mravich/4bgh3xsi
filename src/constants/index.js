import { DATABASE_COLLECTIONS } from './database';

const API_URL = 'http://localhost:8000';
const ADD_ITEM_URL = API_URL + '/api/addDbItem';
const REQUEST_OPTIONS = {
  headers: { 'Access-Control-Allow-Origin': '*' },
};
const SIDEBAR_MENU_ITEMS = [
  {
    name: 'DATABASE',
    menuItems: ['Facility', 'Activity', 'Reservation', 'User'],
  },
  {
    name: 'OTHER',
    menuItems: ['Other1', 'Other2'],
  },
];
export { DATABASE_COLLECTIONS, ADD_ITEM_URL, REQUEST_OPTIONS, API_URL, SIDEBAR_MENU_ITEMS };
