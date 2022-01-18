import React from 'react';
import { Form, Field } from "react-final-form";
interface MyFormValues {
  userInput: string;
}
export  const TaskAdder:React.FC<{}>=()=> {
  const initialValues: MyFormValues = { userInput: '' };

  return (
    <div>
<Form onSubmit={()=>{}}>
  <Field component="input" name="taskTitle"/>
  <Field name="task" component="textarea"/>
</Form>
    </div>
  );
}

