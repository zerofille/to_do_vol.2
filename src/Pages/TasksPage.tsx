import React from 'react';
import TasksList from '../Components/TaskList/TaskList';
import { Link } from 'react-router-dom';

function TasksPage() {


  return (
    <div>
      <h1>Tasks here</h1>
      <TasksList/>
      <Link to="/">Create Task</Link>
    </div>
  );
}

export default TasksPage;
