import React from 'react';
import { withRouter } from 'react-router';
import { TaskAdder } from '../../Components/TaskAdder/TaskAdder';
import Link from '@mui/material/Link';
import './MainPage.sass'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MainPage() {

  return (
    <div className="mainWrap">

      <h1 className="heading">TO DO</h1>
      <ToastContainer/>
      <TaskAdder/>
      <Link className="link" href="/#/mytodos" underline="hover">
        {'SEE TASKS'}
      </Link>

    </div>
  );
}

export default withRouter(MainPage);
