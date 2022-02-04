import React from 'react';
import { useAppSelector } from '../../app/hooks'
import Task from '../Task/Task';
import { IData } from '../../app/taskSlice';

function TaskList() {
  const tasksArr = useAppSelector((state) => state.task.data)
  return (
    <>
      <ul>
        {
          tasksArr.length !== 0 ?
            tasksArr.map((elem: IData) => {
              return <Task key={elem.id} id={elem.id} title={elem.title} text={elem.text}
                           task_status={elem.task_status}/>
            })
            : <h1>NO TASKS YET</h1>
        }
      </ul>
    </>
  )
}

export default TaskList;
