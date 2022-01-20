import * as yup from 'yup';
import { object, SchemaOf, string } from 'yup';
import { setIn } from 'final-form';


interface MyFormValues {
  title: string
  text: string
}


export const validationSchema = yup.object({
  title: yup
  .string()
  .matches(/^.{3,75}$/, 'You need to write something longer than 2 symbols')
  .required(),
  text: yup
  .string()
  .matches(/^.{3,75}$/, 'You need to write something longer than 2 symbols')
  .required()
})

// const validate = (schema: typeof validationSchema) => async (values: MyFormValues) => {
//
//   try {
//     await schema.validate(values, {abortEarly: false});
//   } catch (e) {
//     return e.inner.reduce((errors, error) => {
//       return setIn(errors, error.path, error.message);
//     }, {});
//   }
// };