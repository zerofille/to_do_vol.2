import React from 'react';
import TasksList from './../../Components/TaskList/TaskList';
import Link from '@mui/material/Link';
import { withRouter } from 'react-router';
import './TaskPage.sass'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors';
import { ToastContainer } from 'react-toastify';


function TasksPage() {

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
      <Link className="link" href="/" underline="none">
        <ThemeProvider theme={theme}>
          <Button sx={{margin: 3}} size="large" variant="outlined">{'ADD TASK'}</Button>
        </ThemeProvider>
      </Link>
      <TasksList/>
    </div>
  );
}

export default withRouter(TasksPage);
