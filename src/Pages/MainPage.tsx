import React from 'react';
import { TaskAdder } from '../Components/TaskAdder/TaskAdder';
import {Link} from 'react-router-dom';
import TasksPage from './TasksPage';

function MainPage() {
  return (
    <div>
      <h1>TO DO</h1>
      <Link to="/mytodos">Go to TO-DO list</Link>
      <TaskAdder/>
    </div>
  );
}

export default MainPage;
