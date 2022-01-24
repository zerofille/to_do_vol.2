import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeTaskRequest, changeStatusRequest, getTasksRequest } from '../../app/taskSlice';
import { TaskStatus } from '../../utils/enums';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './task.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

interface ITask {
  id: number
  title: string
  text: string
  task_status: string
}


function Task(props: ITask) {
  const [task_status, setStatus] = useState(TaskStatus.Planned);

  const dispatch = useAppDispatch();

  return (
    <div className="taskWrap">
      <h3 className="test">{props.title}</h3>
      <div className="taskContent">
        <p>{props.text}</p>
        <p>{props.task_status}</p>

        <Stack direction="row" spacing={2}>
          <Button onClick={() => {
            dispatch(removeTaskRequest(props.id))
            dispatch(getTasksRequest())
          }} variant="contained">
            <DeleteIcon/>
          </Button>
        </Stack>

        <FormControl sx={{m: 2, minWidth: 125}} size="small">
          <InputLabel id="demo-simple-select-autowidth-label" sx={{fontSize:10}}> change status</InputLabel>
          <Select
            sx={{height: 30}}
            // labelId="demo-simple-select-autowidth-label"
            // id="demo-simple-select-autowidth"
            onChange={(e: any) => {
              setStatus(e.target.value)
              dispatch(changeStatusRequest({id: props.id, task_status: e.target.value}))
            }}
            autoWidth
            label="status"
            variant="filled"
          >
            <MenuItem defaultValue={task_status} value={TaskStatus.Planned}>planned</MenuItem>
            <MenuItem value={TaskStatus.InProgress}>in progress</MenuItem>
            <MenuItem value={TaskStatus.Done}>done</MenuItem>
          </Select>
        </FormControl>
      </div>

    </div>
  );
}

export default Task;
