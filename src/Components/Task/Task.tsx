import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeTask, getTask, changeStatus } from '../../app/taskSlice';
import './Task.sass'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { TaskStatus } from '../../utils/enums';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


interface ITask {
  id: number
  title: string
  text: string
  task_status: string
}

const useStyles = makeStyles(theme =>
  createStyles({
    smallRadioButton: {
      '& svg': {
        width: '0.5em',
        height: '0.5em',
        margin: '-5px',
        color: '#DD4A48'
      }
    }
  })
);

function Task({id, text, title, task_status}: ITask) {
  const [taskStatus, setStatus] = useState<string>(TaskStatus.Planned);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const clickHandler = () => {
    dispatch(removeTask(id))
    dispatch(getTask())
  }
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value)
    dispatch(changeStatus({id: id, task_status: e.target.value}))
  }

  return (
    <div className="taskWrap">
      <h3 className="title">Task title: {title}</h3>
      <div className="statusWrap">
        <p className="status">current status: <span>{task_status}</span></p></div>
      <div className="taskBody">
        <div className="textWrap">
          <p className="taskText">{text}</p>
        </div>


        <div className="deleteStatusWrap">
          <Stack direction="row" spacing={2}>
            <IconButton onClick={() => clickHandler()}>
              <DeleteIcon/>
            </IconButton>
          </Stack>

          <FormControl>

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              onChange={(e) => changeHandler(e)}
              value={task_status}
              name="radio-buttons-group"

            >
              <div className="radioWrap">
                <FormControlLabel className={classes.smallRadioButton} value={TaskStatus.Planned} control={<Radio/>}
                                  label={TaskStatus.Planned}/>
                <FormControlLabel className={classes.smallRadioButton} value={TaskStatus.InProgress} control={<Radio/>}
                                  label={TaskStatus.InProgress}/>
                <FormControlLabel className={classes.smallRadioButton} value={TaskStatus.Done} control={<Radio/>}
                                  label={TaskStatus.Done}/>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </div>

    </div>
  );
}

export default Task;
