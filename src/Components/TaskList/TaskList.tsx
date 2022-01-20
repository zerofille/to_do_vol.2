import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getTasksRequest } from '../../app/taskSlice'
import Task from '../Task/Task';


function TaskList() {
  const dispatch = useAppDispatch();
  const tasksArr = useAppSelector((state) => state.tasks.data)

  useEffect(() => {
    dispatch(getTasksRequest())
  }, []);


  return (

    <ul>
    {
      tasksArr.map((elem) => {
        return <Task id={elem.id} title={elem.title} text={elem.text} task_status={elem.task_status}/>
      })
    }
  </ul>

)
}

export default TaskList;
