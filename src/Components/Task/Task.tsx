import React, { useState } from 'react';
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
import Typography from '@material-ui/core/Typography';


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
            color: '#555F54'
          },
          [theme.breakpoints.down(850)]: {
            fontSize: '13px',
            whiteSpace: 'nowrap'
          },
          [theme.breakpoints.down(415)]: {
            fontSize: '12px',
            marginBottom: '5px',
            height: '0.3em',
            whiteSpace: 'nowrap'
          }
        },
        radio: {
          [theme.breakpoints.down(415)]: {
            marginTop: '10px'
          }
        },
      }
    )
  )
;

function Task({id, text, title, task_status}: ITask) {
  const [taskStatus, setStatus] = useState<string>(TaskStatus.Planned);

  const classes = useStyles();
  const clickHandler = () => {
    // dispatch(removeTask({id, title}))
    // dispatch(getTask())
  }
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value)
    // dispatch(changeStatus({id: id, task_status: e.target.value}))
  }
  return (
    <div className="taskWrap">
      <h3 className="title">Task title: {title}</h3>
      <div className="statusWrap">
        <p className="status">current status: {task_status}</p>
      </div>
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
                <FormControlLabel className={classes.smallRadioButton} value={TaskStatus.Planned}
                                  control={<Radio className={classes.radio}/>}
                                  label={
                                    <Typography className={classes.smallRadioButton}>
                                      {TaskStatus.Planned}</Typography>}/>
                <FormControlLabel className={classes.smallRadioButton} value={TaskStatus.InProgress}
                                  control={<Radio className={classes.radio}/>}
                                  label={
                                    <Typography className={classes.smallRadioButton}>
                                      {TaskStatus.InProgress}</Typography>}/>
                <FormControlLabel className={classes.smallRadioButton} value={TaskStatus.Done}
                                  control={<Radio className={classes.radio}/>}
                                  label={
                                    <Typography className={classes.smallRadioButton}>
                                      {TaskStatus.Done}</Typography>}/>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Task;
