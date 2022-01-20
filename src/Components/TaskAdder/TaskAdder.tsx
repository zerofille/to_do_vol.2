import React from 'react';
import { Form, Field } from 'react-final-form';
import { createTaskRequest } from '../../app/taskSlice';
import { useAppDispatch } from '../../app/hooks'


interface MyFormValues {
  title: string
  text: string
}

interface IValue {
  value: string
}

export const TaskAdder: React.FC = () => {

  const required = (value: IValue) => (value ? undefined : 'Required')
  const dispatch = useAppDispatch();
  return (
    <div>
      <Form onSubmit={(values: MyFormValues, form) => {
        dispatch(createTaskRequest({
          id: Date.now().toString(),
          title: values.title,
          text: values.text,
          task_status: 'planned'
        }))
        form.reset()

      }}
            render={(props) => {
              console.log(props)
              return <form onSubmit={props.handleSubmit}>

                <Field name="title" component="input"/>
                {props.errors ? <span>{props.errors.title}</span> : null}
                <Field name="text" component="textarea"/>

                <h1>{props.error}</h1>
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


