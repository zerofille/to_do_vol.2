import React from 'react';
import { TaskAdder } from '../Components/TaskAdder/TaskAdder';
import Link from '@mui/material/Link';
function MainPage() {
  return (
    <div>
      <h1>TO DO</h1>
      <Link href="/#/mytodos" underline="hover">
        {'SEE TASKS'}
      </Link>
      <TaskAdder/>
    </div>
  );
}

export default MainPage;
