import * as Yup from 'yup';

const WizardFormValidationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'too short!').max(40, 'too long!').required('required!'),
  url: Yup.string()
    .matches(
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
      'not a URL!',
    )
    .required('required!'),
  reward: Yup.number().positive('positive number required!'),
  budget: Yup.number().positive('positive number required!'),
});

export default WizardFormValidationSchema;
