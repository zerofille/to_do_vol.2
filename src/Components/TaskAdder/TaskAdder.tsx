import React from 'react';
import { Form, Field } from 'react-final-form';
import { createTaskRequest, getTasksRequest } from '../../app/taskSlice';
import { useAppDispatch } from '../../app/hooks'
import { validate } from '../../utils/validation';
import { validationSchema } from '../../utils/validation';

interface MyFormValues {
  title: string
  text: string
}

export enum TaskStatus {
  Planned,
  InProgress,
  Done
}

export const TaskAdder: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Form validate={validate(validationSchema)} onSubmit={(values: MyFormValues, form) => {
        dispatch(createTaskRequest({
          id: Date.now().toString(),
          title: values.title,
          text: values.text,
          task_status: TaskStatus[0]
        }))
        form.reset()
      }}
            render={(props) => {
              console.log(props)
              return <form onSubmit={props.handleSubmit}>
                {/*<Field name="title" component="input"/>*/}
                <Field name="title">
                  {field => (
                    <div className="input-row">
                      <input {...field.input} type="text"/>
                      {field.meta.touched && field.meta.error && (
                        <span className="error">{field.meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="text">
                  {field => (
                    <div className="input-row">
                      <textarea {...field.input}  />
                      {field.meta.touched && field.meta.error && (
                        <span className="error">{field.meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <button type="submit">
                  Submit
                </button>
              </form>
            }
            }
      />
    </div>
  );
}


