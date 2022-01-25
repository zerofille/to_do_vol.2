import axios from 'axios';

export interface IPost {
  id?: number
  task_status?: string
  text?: string
  title?: string
}

interface IChange {
  id: number
  task_status: string
}

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const postTask = async (data: IPost) => {
  return await httpClient.post('/tasks', data);
};

export const getTasks = async () => {
  return await httpClient.get('/tasks');
};

export const removeTask = async (data: number) => {
  return await httpClient.delete(`/tasks/${data}`)
};

export const changeStatus = async (data: IChange) => {
  console.log(data)
  return await httpClient.patch(`/tasks/${data.id}`, data)
}
