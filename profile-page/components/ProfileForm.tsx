import React, { FC } from 'react';
import { Formik, Form, Field, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface FormValues {
    name: string;
    email: string;
    bio: string;
}

interface FormStatus {
    success?: any;
    error?: string;
}

const initialValues: FormValues = {
    name: '',
    email: '',
    bio: '',
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    bio: Yup.string().required('Bio is required'),
});

const ProfileForm: FC = () => {
    const handleSubmit = async (
        values: FormValues,
        { setSubmitting, setStatus }: FormikHelpers<FormValues>
    ) => {
        try {
            const response = await axios.post('/api/profile', values);
            setStatus({ success: response.data });
        } catch (error: any) {
            setStatus({ error: error.message });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, errors, touched, status }: FormikProps<FormValues>) => (
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" placeholder="Name" />
                    {touched.name && errors.name && <div>{errors.name}</div>}

                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" placeholder="Email" />
                    {touched.email && errors.email && <div>{errors.email}</div>}

                    <label htmlFor="bio">Bio</label>
                    <Field name="bio" type="text" placeholder="Bio" />
                    {touched.bio && errors.bio && <div>{errors.bio}</div>}

                    {status && status.error && <div>{status.error}</div>}
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileForm;
