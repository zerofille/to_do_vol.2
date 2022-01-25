import React from 'react';
import TasksList from './../../Components/TaskList/TaskList';
import Link from '@mui/material/Link';
import './TaskPage.sass'

function TasksPage() {


  return (
    <div className="wrapper">
      <TasksList/>
      <Link className="link" href="/" underline="hover">
        {'ADD TASK'}
      </Link>
    </div>
  );
}

export default TasksPage;
