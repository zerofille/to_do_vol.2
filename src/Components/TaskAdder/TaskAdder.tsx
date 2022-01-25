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
    <div>
      <Form validate={validate(validationSchema)} onSubmit={(values, form) => {
        submitHandler(values, form)
      }} render={({handleSubmit}) => {
        return <form onSubmit={handleSubmit}>

          <Field name="title">
            {field => (
              <div className="input-row">
                <Input
                  {...field.input} type="text"
                  placeholder="Todo"
                  inputProps={{
                    'aria-label': 'Description'
                  }}
                  style={{width: '90%'}}/>

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
                  aria-label="minimum height"
                  placeholder="Minimum 3 rows"
                  style={{width: '90%'}}
                />

                {field.meta.touched && field.meta.error && (
                  <span className="error">{field.meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <Button variant="contained" type={"submit"}>Submit</Button>
        </form>
      }
      }
      />
    </div>
  );
}


