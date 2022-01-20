import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { getTasksRequest } from '../app/taskSlice'

interface ITask {
  id: string
  title: string
  text: string
  status: string
}

function Tasks() {
  const dispatch = useAppDispatch();
  const tasksArr = useAppSelector((state) => state.tasks.data)

  useEffect(() => {
    dispatch(getTasksRequest())
  }, [])

  return (
    <div>
      <h1>1</h1>
      {tasksArr?.map((elem) => {
          return <div key={elem.id}>
            <h3>{elem.title}</h3>
            <p>{elem.text}</p>
            <p>{elem.task_status}</p>
          </div>;
        }
      )}
    </div>
  );
}

export default Tasks;
