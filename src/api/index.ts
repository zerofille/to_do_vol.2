import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const postTask = async (data: any) => {

  return await httpClient.post('/tasks', data);
};

export const getTasks = async () => {

  return await httpClient.get('/tasks');
};

export const removeTask = async (data: any) => {

  return await httpClient.delete(`/tasks/${data}`, data)
}

export const changeStatus = async (data: any) => {
  console.log(data.id)
  return await httpClient.patch(`/tasks/${data.id}`, data)
}
