import React from 'react';
import TasksList from './../../Components/TaskList/TaskList';
import Link from '@mui/material/Link';
import { withRouter } from 'react-router';
import './TaskPage.sass'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors';

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
      <Link className="link" href="/" underline="none">
        <ThemeProvider theme={theme}>
          <Button sx={{margin: 4}} size="large" variant="outlined">{'ADD TASK'}</Button>
        </ThemeProvider>
      </Link>
      <TasksList/>

    </div>
  );
}

export default withRouter(TasksPage);
