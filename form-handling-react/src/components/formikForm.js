import { Formik, Form, Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    userName: Yup.string().min(2, "Too Short").max(50, "Too Long").required('required'),
    email: Yup.string().email('Invalid Email').required('required'),
    password: Yup.string().required('required'),
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
                <ErrorMessage name="username" />

                <Field name="email" type="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                <button type="submit">Submit</button>
                <ErrorMessage name="email" />

                <Field name="password" />
                {errors.password && touched.password ? (
                    <div>{errors.lastName}</div>
                ) : null}
                <ErrorMessage name="password" />
            </Form>
        )}
    </Formik>
)


