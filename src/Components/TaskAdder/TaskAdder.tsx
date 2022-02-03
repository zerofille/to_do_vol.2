import React, { useCallback } from 'react';
import { Form, Field } from 'react-final-form';
import { useAppDispatch } from '../../app/hooks'
import { validate } from '../../utils/validation';
import { validationSchema } from '../../utils/validation';
import { createTaskAction } from '../../app/taskSlice';
import { TaskStatus } from '../../utils/enums';
import { FormApi } from 'final-form';
import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import './TaskAdder.sass'
import { createStyles, makeStyles } from '@material-ui/core/styles';

interface MyFormValues {
  title: string
  text: string
}

const useStyles = makeStyles(theme =>
  createStyles({
      muiInput: {
        width: '500px',
        marginTop: '30px',
        backgroundColor: 'inherit',
        outline: 'none',
        fontSize: '1rem',
        padding: '5px',
        [theme.breakpoints.down(550)]:
          {width: '450px'}
        ,
        [theme.breakpoints.down(480)]:
          {width: '330px'}
        ,
        [theme.breakpoints.down(360)]:
          {width: '250px'}
      },
      btnMui: {
        borderColor: 'grey',
        color: 'grey',
        marginTop: '30px',
      }
    }
  ))

export const TaskAdder: React.FC = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const submitHandler = useCallback((values: MyFormValues, form: FormApi<MyFormValues, Partial<MyFormValues>>) => {
    dispatch(createTaskAction({
      id: Date.now(),
      title: values.title,
      text: values.text,
      task_status: TaskStatus.Planned
    }))
    form.restart()
  }, [dispatch])
  return (
    <div className="mainWrapper">
      <Form validate={validate(validationSchema)} onSubmit={submitHandler} render={({handleSubmit}) => {
        return <form onSubmit={handleSubmit}>
          <div className="formWrap">
            <Field name="title">
              {field => (
                <div className="input-row">
                  <Input {...field.input} type="text" className={classes.muiInput}
                         color={'success'}
                         placeholder="to do"/>
                  {field.meta.touched && field.meta.error && (
                    <span className="error">{field.meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="text">
              {field => (
                <div className="input-row">
                  <TextareaAutosize
                    {...field.input}
                    aria-label="empty textarea"
                    placeholder="write down the details"
                    className={classes.muiInput}
                  />
                  {field.meta.touched && field.meta.error && (
                    <span className="error">{field.meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Button sx={{marginTop: '30px'}} variant="outlined" color={'inherit'}
                    type="submit">ADD
              TASK</Button>
          </div>
        </form>
      }
      }
      />
    </div>
  );
}


