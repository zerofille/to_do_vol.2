import React, { useState, useEffect, useCallback } from 'react';
import TasksList from './../../Components/TaskList/TaskList';
import Link from '@mui/material/Link';
import { withRouter } from 'react-router';
import './TaskPage.sass'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from '../../app/hooks';
import { getTaskAction } from '../../app/taskSlice';
import { TaskStatus } from '../../utils/enums';


function TasksPage() {
  const [sortDir, setSortDir] = useState('desc')
  const [sortValue, setSortValue] = useState('id')
  const [task_status, setTaskStatus] = useState<string>()
  const dispatch = useAppDispatch()
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[600],
      },
    },
  });
  const clickHandler = useCallback(() => {
    setSortValue('id')
    setSortDir(sortDir === 'desc' ? 'asc' : 'desc')
  }, [sortDir, sortValue])
  const sortByStatusHandler = useCallback(() => {
    setSortDir(sortDir === 'desc' ? 'asc' : 'desc')
    setSortValue('task_status')
  }, [sortDir, sortValue])
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTaskStatus(e.currentTarget.value)
  }
  useEffect(() => {
    if (task_status) {
      dispatch(getTaskAction({_sort: sortValue, _order: sortDir, task_status}))
    } else {
      dispatch(getTaskAction({_sort: sortValue, _order: sortDir}))
    }
  }, [sortDir, sortValue, task_status])
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
        <button className="showBtn" onClick={clickHandler}>
          sort by id
        </button>
        <button className="showBtn" onClick={sortByStatusHandler}>
          sort by task status
        </button>
      </div>
      <TasksList/>
    </div>
  );
}

export default withRouter(TasksPage);
