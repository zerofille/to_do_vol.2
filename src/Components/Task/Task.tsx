import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeTaskRequest } from '../../app/taskSlice';

interface ITask {
  id: number
  title: string
  text: string
  task_status: string
}

function Task(props: ITask) {

  const dispatch = useAppDispatch();

  const {id} = props;
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>{props.task_status}</p>
      <button onClick={()=>dispatch(removeTaskRequest(id))}>delete</button>
    </div>
  );
}

export default Task;
