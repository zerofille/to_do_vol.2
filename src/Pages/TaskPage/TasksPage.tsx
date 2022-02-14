import React, { useState, useEffect, useCallback } from 'react';
import TasksList from './../../Components/TaskList/TaskList';
import { withRouter } from 'react-router';
import './TaskPage.sass'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTaskAction, getTaskCountAction } from '../../app/taskSlice';
import { TaskStatus } from '../../utils/enums';
import { Link } from 'react-router-dom';

function TasksPage() {
  const [sortDir, setSortDir] = useState('desc')
  const [sortValue, setSortValue] = useState('id')
  const [task_status, setTaskStatus] = useState<string>()
  const [page, setPage] = useState(1)

  const taskCount = useAppSelector(state => state.task.taskCount)
  const dispatch = useAppDispatch()

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[600],
      },
    },
  });
  const nextPageHandler = ()=>{
    if(taskCount){
      if (page < Math.round(taskCount/4)) {setPage(prevState => prevState + 1)}}
  }
  const prevPageHandler = ()=>{
    if (page !== 0) {setPage(prevState => prevState - 1)}
  }
  const clickHandler = useCallback(() => {
    setSortValue('id')
    setSortDir(sortDir === 'desc' ? 'asc' : 'desc')
    dispatch(getTaskAction({_page: page, _limit: 4, _sort: sortValue, _order: sortDir}))
  }, [sortDir])
  const sortByStatusHandler = useCallback(() => {
    setSortDir(sortDir === 'desc' ? 'asc' : 'desc')
    setSortValue('task_status')
  }, [sortDir])
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTaskStatus(e.currentTarget.value)
  }
  useEffect(() => {
    if (task_status) {
      dispatch(getTaskAction({_page: page, _limit: 4, _sort: sortValue, _order: sortDir, task_status}))
    } else {
      dispatch(getTaskAction({_page: page, _limit: 4, _sort: sortValue, _order: sortDir}))
    }
    dispatch(getTaskCountAction())
  }, [page,sortDir, sortValue, task_status, dispatch])
  return (
    <div className="wrapper">
      <ToastContainer autoClose={1500}/>
      <div className="btnSelWrap">
        <Link className="link" to="/">
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
          sort by status
        </button>
      </div>
      <TasksList/>
      <div className={'btnWrap'}>
        <button className="pageBtn" onClick={prevPageHandler}>«
        </button>
        <button className="pageBtn" onClick={nextPageHandler} >»
        </button>
        <div>

        </div>
      </div>
    </div>
  );
}

export default withRouter(TasksPage);
