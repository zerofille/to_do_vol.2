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

export const postTask = (data: IPost) => {
  return httpClient.post('/tasks', data);
};
export const getTasks = (paramsData: any) => {
  return httpClient.get('/tasks',
    {
      params:{...paramsData}
    });
};


// export const getFilterSortTasks = ({sortValue,task_status, sortDir}: any) => {
//
//   return httpClient.get('/tasks',
//     {
//       params: {
//         task_status: task_status,
//         _sort: sortValue,
//         _order: sortDir
//       }
//     });
// };

export const removeTask = (data: IRemove) => {
  return httpClient.delete(`/tasks/${data.id}`)
};

export const changeStatus = (data: IChange) => {
  return httpClient.patch(`/tasks/${data.id}`, data)
}
