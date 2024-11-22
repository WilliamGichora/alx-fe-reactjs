import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    userName: Yup.string().min(2, "Too Short").max(50, "Too Long").required('required'),
    email: Yup.string().email('Invalid Email').required('required'),
    password: Yup.string().min(8, "Password must be more than 8 characters").required('required'),
});

export const formikForm = () => (
    <Formik
        initialValues={{
            userName: '',
            email: '',
            password: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={values => {
            console.log(values);
        }}
    >
        {({ errors, touched }) => (
            <Form>
                <Field name="username" />
                {errors.userName && touched.userName ? (
                    <div>{errors.firstName}</div>
                ) : null}
                <Field name="email" type="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                <button type="submit">Submit</button>
                <Field name="password" />
                {errors.password && touched.password ? (
                    <div>{errors.lastName}</div>
                ) : null}
            </Form>
        )}
    </Formik>
)


