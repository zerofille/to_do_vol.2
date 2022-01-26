import React from 'react';
import {withRouter} from 'react-router';
import { TaskAdder } from '../../Components/TaskAdder/TaskAdder';
// import Link from '@mui/material/Link';
import {Link} from 'react-router-dom'
import './MainPage.sass'

function MainPage() {
  return (
    <div className="mainWrap">
      <h1 className="heading">TO DO</h1>
      <TaskAdder/>
      {/*<Link className="link" href="/#/mytodos" underline="hover">*/}
      {/*  {'SEE TASKS'}*/}
      {/*</Link>*/}
      <Link to="/mytodos">Link</Link>
    </div>
  );
}

export default withRouter(MainPage);
