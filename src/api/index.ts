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

export interface IParams {
  _sort?: string
  _order?: string
  task_status?: string
}

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const postTask = (data: IPost) => {
  return httpClient.post('/tasks', data);
};
export const getTasks = (paramsData: IParams) => {
  return httpClient.get('/tasks',
    {
      params: paramsData
    });
};

export const removeTask = (data: IRemove) => {
  return httpClient.delete(`/tasks/${data.id}`)
};

export const changeStatus = (data: IChange) => {
  return httpClient.patch(`/tasks/${data.id}`, data)
}
