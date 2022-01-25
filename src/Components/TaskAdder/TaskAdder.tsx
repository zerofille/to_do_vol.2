import React from 'react';
import { Form, Field } from 'react-final-form';
import { useAppDispatch } from '../../app/hooks'
import { validate } from '../../utils/validation';
import { validationSchema } from '../../utils/validation';
import { createTask } from '../../app/taskSlice';
import { TaskStatus } from '../../utils/enums';
import { FormApi } from 'final-form';
import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import './TaskAdder.sass'

interface MyFormValues {
  title: string
  text: string
}


export const TaskAdder: React.FC = () => {
  const dispatch = useAppDispatch();
  const submitHandler = (values: MyFormValues, form: FormApi<MyFormValues, Partial<MyFormValues>>) => {
    dispatch(createTask({
      id: Date.now(),
      title: values.title,
      text: values.text,
      task_status: TaskStatus.Planned
    }))
    form.reset()
  }
  return (
    <div className="mainWrapper">
      <Form validate={validate(validationSchema)} onSubmit={(values, form) => {
        submitHandler(values, form)
      }} render={({handleSubmit}) => {
        return <form onSubmit={handleSubmit}>
          <div className="formWrap">
            <Field name="title">
              {field => (
                <div className="input-row">

                  <Input {...field.input} type="text" sx={{width: 500, marginTop: 3}} color="secondary"
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
                    style={{width: 500, height: 50, background: 'inherit', marginTop: 30}}
                  />
                  {field.meta.touched && field.meta.error && (
                    <span className="error">{field.meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Button style={{borderColor: 'grey', color: 'grey', marginTop: 20}} variant="outlined" type={'submit'}>ADD
              TASK</Button>
          </div>
        </form>
      }
      }
      />

    </div>
  );
}


