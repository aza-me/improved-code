import axios from 'axios';

const getBaseUrl = () => {
  return 'https://my-json-server.typicode.com';
};

const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
