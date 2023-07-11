import * as yup from 'yup';

export const designValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  user_id: yup.string().nullable(),
  business_id: yup.string().nullable(),
});
