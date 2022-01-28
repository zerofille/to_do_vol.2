import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import Task from '../Task/Task';
import { getTask } from '../../app/taskSlice';
import { IData } from '../../app/taskSlice';
import { useGetTasksQuery } from '../../rtkQuery/rtqApi';

function TaskList() {
  const dispatch = useAppDispatch();
  const tasksArr = useAppSelector((state) => state.task.data)
  const {data, isLoading, isSuccess, isError, error} = useGetTasksQuery();
  console.log(data)
  // useEffect(() => {
  //   dispatch(getTask())
  // }, []);
  return (
    <>
      <ul>

        {
          isSuccess ?
            {
              if(data: IData[]) {
                {
                  data.length !== 0 ? data.map((elem: IData) => {
                    return <Task key={elem.id} id={elem.id} title={elem.title} text={elem.text}
                                 task_status={elem.task_status}/>
                  }) : <h1>no tasks yet</h1>
                }
              }
            }
            : <p>loading...</p>}


      </ul>
    </>
  )
}

export default TaskList;
