import React, { useState, useEffect } from 'react';
import TasksList from './../../Components/TaskList/TaskList';
import Link from '@mui/material/Link';
import { withRouter } from 'react-router';
import './TaskPage.sass'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from '../../app/hooks';
import { getTask } from '../../app/taskSlice';
import { TaskStatus } from '../../utils/enums';

const icon = require('../../utils/sort (1).png')


function TasksPage() {
  const [sort, setSort] = useState('desc')
  const dispatch = useAppDispatch()
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[600],
      },
    },
  });
  const clickHandler = () => {
    setSort(sort === 'desc' ? 'asc' : 'desc')
  }
  const changeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    dispatch(getTask(e.currentTarget.value ? {task_status: e.currentTarget.value} : {_sort: 'id', _order: sort}))
  }
  useEffect(() => {
    dispatch(getTask({_sort: 'id', _order: sort}))
  }, [sort])
  return (
    <div className="wrapper">
      <ToastContainer autoClose={1500}/>
      <div className="btnSelWrap">
        <Link className="link" href="/" underline="none">
          <ThemeProvider theme={theme}>
            <Button sx={{margin: 3}} size="large" variant="outlined">{'ADD TASK'}</Button>
          </ThemeProvider>
        </Link>
        <select onChange={changeHandler}>
          <option value="">filter by status</option>
          <option value={TaskStatus.Planned}>{TaskStatus.Planned}</option>
          <option value={TaskStatus.InProgress}>{TaskStatus.InProgress}</option>
          <option value={TaskStatus.Done}>{TaskStatus.Done}</option>
        </select>
        <button className="showBtn" onClick={clickHandler}><img src={icon}
                                                                alt={icon}/>
        </button>
      </div>
      <TasksList/>
    </div>
  );
}

export default withRouter(TasksPage);
