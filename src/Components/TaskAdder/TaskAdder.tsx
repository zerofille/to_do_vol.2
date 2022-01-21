import React from 'react';
import { Form, Field } from 'react-final-form';
import { createTaskRequest, getTasksRequest } from '../../app/taskSlice';
import { useAppDispatch } from '../../app/hooks'


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
      <Form onSubmit={(values: MyFormValues, form) => {
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
                <Field name="title" component="input"/>
                <Field name="text" component="textarea"/>
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


