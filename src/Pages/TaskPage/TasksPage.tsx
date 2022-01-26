import React from 'react';
import TasksList from './../../Components/TaskList/TaskList';
import Link from '@mui/material/Link';
import { withRouter } from 'react-router';
import './TaskPage.sass'

function TasksPage() {


  return (
    <div className="wrapper">
      <Link className="link" href="/" underline="hover">
        {'ADD TASK'}
      </Link>
      <TasksList/>

    </div>
  );
}

export default withRouter(TasksPage);
