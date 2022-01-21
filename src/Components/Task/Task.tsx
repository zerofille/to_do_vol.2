import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeTaskRequest, changeStatusRequest, getTasksRequest } from '../../app/taskSlice';
import { TaskStatus } from '../TaskAdder/TaskAdder';
import './styles.module.sass'

interface ITask {
  id: number
  title: string
  text: string
  task_status: string
}

function Task(props: ITask) {
  const [task_status, setStatus] = useState(TaskStatus[0]);
  const tasksArr = useAppSelector((state) => state.tasks.data)
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getTasksRequest())
  // },[]);
  const {id} = props;
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>{props.task_status}</p>
      <button onClick={() => {
        dispatch(removeTaskRequest(id))
        dispatch(getTasksRequest())
      }
      }>delete
      </button>
      <select onChange={(e) => {
        setStatus(e.target.value)
        dispatch(changeStatusRequest({id: id, task_status: e.target.value}))
      }}>
        <option value={TaskStatus[0]}>planned</option>
        <option value={TaskStatus[1]}>in progress</option>
        <option value={TaskStatus[2]}>done</option>
      </select>
    </div>
  );
}

export default Task;
