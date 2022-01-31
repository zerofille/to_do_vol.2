import React from 'react';
import Task from '../Task/Task';
import { IData } from '../../app/taskSlice';
import { useGetTasksQuery } from '../../rtkQuery/rtqApi';


function TaskList() {
  const {data, isLoading, isSuccess, isError, error} = useGetTasksQuery();
  return (
    <>
      <ul>
        {error ? (
          <>Error occurred</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? data.map((e: IData) => {
          return <Task key={e.id} id={e.id} title={e.title} text={e.text} task_status={e.task_status}/>
        }) : null}
      </ul>
    </>
  )
}
export default TaskList;
