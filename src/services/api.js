import axios from 'axios';


// https://free.currconv.com/api/v7/
//  > convert?q=USD_BRL&compact=ultra&apiKey=8fcb1953bfb24c184526

const api = axios.create({
  baseURL: 'https://free.currconv.com/api/v7/'
});

export default api;