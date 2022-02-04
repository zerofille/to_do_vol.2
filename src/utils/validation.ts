import * as yup from 'yup';
import { setIn } from 'final-form';


interface MyFormValues {
  title: string
  text: string
}


export const validationSchema = yup.object({
  title: yup
  .string()
  .matches(/^.{3,1000}$/, 'You need to write something longer than 2 symbols')
  .required("required field"),
  text: yup
  .string()
  .matches(/^.{3,1000}$/, 'You need to write something longer than 2 symbols')
  .required("required field")
})

export const validate = (schema: typeof validationSchema) => async (values: MyFormValues) => {

  try {
    await schema.validate(values, {abortEarly: false});
  } catch (e) {
    // @ts-ignore
    return e.inner.reduce((errors, error) => {
      return setIn(errors, error.path, error.message);
    }, {});
  }
};
