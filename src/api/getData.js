import axios from 'axios';

export async function getData() {
  const response = await axios.get('https://pb-api.herokuapp.com/bars');
  return response.data;
}
