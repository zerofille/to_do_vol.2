import React from 'react';
import TasksList from '../Components/TaskList/TaskList';
// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';
function TasksPage() {


  return (
    <div>
      <h1>Tasks here</h1>
      <TasksList/>
      {/*<Link to="/">Create Task</Link>*/}
      <Link href="/" underline="hover">
        {'ADD TASK'}
      </Link>
    </div>
  );
}

export default TasksPage;
