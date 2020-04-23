import axios from 'axios';

export async function getData() {
    const response = await axios.get('http://pb-api.herokuapp.com/bars')
    return response.data
}