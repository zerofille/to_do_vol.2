import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const postTask = async (data:object) => {
  return await httpClient.post('/tasks', data);
};

export const getTasks = async () => {

  return await httpClient.get('/tasks');
};
