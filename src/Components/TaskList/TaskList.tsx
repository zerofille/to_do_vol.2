import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import Task from '../Task/Task';
import { getTask } from '../../app/taskSlice';
import { IData } from '../../app/taskSlice';

function TaskList() {
  const dispatch = useAppDispatch();
  const tasksArr = useAppSelector((state) => state.task.data)
  useEffect(() => {
    dispatch(getTask({_sort: 'id', _order: "desc"}))
  }, []);
  return (
    <>
      <ul>
        {
          tasksArr.length !== 0 ?
            tasksArr.map((elem: IData) => {
              return <Task key={elem.id} id={elem.id} title={elem.title} text={elem.text}
                           task_status={elem.task_status}/>
            })
            : <h1>no tasks yet</h1>
        }
      </ul>
    </>
  )
}

export default TaskList;
