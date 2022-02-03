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

export interface IRemove {
  id: number
  title: string
}

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const postTask = async (data: IPost) => {
  return await httpClient.post('/tasks', data);
};
export const getTasks = async (params: object) => {
  return await httpClient.get('/tasks',
    {
      params
    });
};

export const removeTask = async (data: IRemove) => {
  return await httpClient.delete(`/tasks/${data.id}`)
};

export const changeStatus = async (data: IChange) => {
  return await httpClient.patch(`/tasks/${data.id}`, data)
}
