import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeTaskRequest, changeStatusRequest } from '../../app/taskSlice';
import { TaskStatus } from '../TaskAdder/TaskAdder';

interface ITask {
  id: number
  title: string
  text: string
  task_status: string
}

function Task(props: ITask) {
  const [task_status, setStatus] = useState(TaskStatus[0])
  const dispatch = useAppDispatch();

  const {id} = props;
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>{props.task_status}</p>
      <button onClick={() => dispatch(removeTaskRequest(id))}>delete</button>
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
