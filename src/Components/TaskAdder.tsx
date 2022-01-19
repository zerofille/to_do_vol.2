import React from 'react';
import { Form, Field } from 'react-final-form';

interface MyFormValues {
  userInput: string;
}

export const TaskAdder: React.FC = () => {


  return (
    <div>
      <Form onSubmit={() => {}}
            render={() => (
              <form onSubmit={()=>{}} >
        <Field name="taskTitle" component="input"/>
        <Field name="userInput" component="textarea"/>
                </form>)}
      />
    </div>
  );
}

