import React from 'react';
import TasksList from './../../Components/TaskList/TaskList';
import Link from '@mui/material/Link';
import { withRouter } from 'react-router';
import './TaskPage.sass'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from '../../app/hooks';
import { getFilteredTasks } from '../../app/taskSlice';
import { TaskStatus } from '../../utils/enums';

function TasksPage() {
  const dispatch = useAppDispatch()
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[600],
      },
    },
  });
  return (
    <div className="wrapper">
      <ToastContainer autoClose={1500}/>
      <div className='btnSelWrap'>
      <Link className="link" href="/" underline="none">
        <ThemeProvider theme={theme}>
          <Button sx={{margin: 3}} size="large" variant="outlined">{'ADD TASK'}</Button>
        </ThemeProvider>
      </Link>
      <select  onChange={(e)=>dispatch(getFilteredTasks(e.currentTarget.value))}>
        <option >filter by status</option>
        <option value={TaskStatus.Planned}>{TaskStatus.Planned}</option>
        <option value={TaskStatus.InProgress}>{TaskStatus.InProgress}</option>
        <option value={TaskStatus.Done}>{TaskStatus.Done}</option>
      </select>
      </div>
      <TasksList/>
    </div>
  );
}

export default withRouter(TasksPage);
