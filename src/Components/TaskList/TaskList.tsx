import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getTasksRequest } from '../../app/taskSlice'
import styles  from './styles.module.scss'

interface ITask {
  id: string
  title: string
  text: string
  status: string
}

function TaskList() {
  const dispatch = useAppDispatch();
  const tasksArr = useAppSelector((state) => state.tasks.data)

  useEffect(() => {
    dispatch(getTasksRequest())
  }, [])

  return (
    <div>

      {tasksArr?.map((elem) => {
          return <div className={styles.taskWrap} key={elem.id}>
            <h3>{elem.title}</h3>
            <p>{elem.text}</p>
            <p>{elem.task_status}</p>
          </div>;
        }
      )}
    </div>
  );
}

export default TaskList;
