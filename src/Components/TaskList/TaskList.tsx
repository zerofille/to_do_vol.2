import React, { useEffect } from 'react';
import Task from '../Task/Task';


function TaskList() {

  useEffect(() => {
    // dispatch(getTask())
  }, []);
  return (
    <>
      <ul>
        {/*{*/}
        {/*  tasksArr.length !== 0 ?*/}
        {/*    tasksArr.map((elem: IData) => {*/}
        {/*      return <Task key={elem.id} id={elem.id} title={elem.title} text={elem.text}*/}
        {/*                   task_status={elem.task_status}/>*/}
        {/*    })*/}
        {/*    : <h1>no tasks yet</h1>*/}
        {/*}*/}
      </ul>
    </>
  )
}

export default TaskList;
