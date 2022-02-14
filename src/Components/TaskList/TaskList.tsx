import React from 'react';
import { useAppSelector } from '../../app/hooks'
import Task from '../Task/Task';
import { IData } from '../../app/taskSlice';


interface IStatVar {

  stateVar: {
    page: number
    sortValue: string
    sortDir: string
    task_status: any

  }
}

function TaskList(props: IStatVar) {
  console.log(props)
  const tasksArr = useAppSelector((state) => state.task.data)
  return (
    <>
      <ul>
        {
          tasksArr.length !== 0 ?
            tasksArr.map((elem: IData) => {
              return <Task stateVar={props.stateVar} key={elem.id} id={elem.id} title={elem.title} text={elem.text}
                           task_status={elem.task_status}/>
            })
            : <h1>NO TASKS YET</h1>
        }
      </ul>
    </>
  )
}

export default TaskList;
