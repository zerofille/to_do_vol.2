import axios from 'axios';
import { IData } from '../app/asynkThunk';
const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const postTask = async (data:IData) => {
  return await httpClient.post('/tasks', data);
};

export const getTasks = async () => {
  return await httpClient.get('/tasks');
};

export const removeTask = async (data: any) => {
  return await httpClient.delete(`/tasks/${data}`)
};

export const changeStatus = async (data: any) => {
  return await httpClient.patch(`/tasks/${data.id}`, data)
}
