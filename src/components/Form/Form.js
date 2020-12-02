import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import "./Form.css"

class CheckoutForm extends React.Component  {
    render() {
        const phoneRegExp = RegExp(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/);
        const {history} = this.props;
        return (
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: ''
                }}
                validationSchema={yup.object().shape({
                    name: yup.string()
                        .required('Name is required'),
                    email: yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    phone: yup.string().matches(phoneRegExp, 'Phone number is invalid')
                        .required('A phone number is required'),
                })}
                onSubmit={() => {
                    alert('Success! Wait for feedback. You can back to shopping');
                    history.push('/')
                }}

                render={() => (
                    <div className='checkout-form-wrapper'>
                        <Form className='checkout-form'>
                            <h1>Process order</h1>
                            <div className="form-group">
                                <Field name="name" type="text" className='form-control' placeholder='Name'/>
                                <ErrorMessage name="name" component="div" className="invalid-feedback"/>
                            </div>
                            <div className="form-group">
                                <Field name="email" type="text" className='form-control' placeholder='Email'/>
                                <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                            </div>
                            <div className="form-group">
                                <Field name="phone" type="phone" className='form-control' placeholder='Phone'/>
                                <ErrorMessage name="phone" component="div" className="invalid-feedback"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="buttons_btn">Send</button>
                                <button type="reset" className="buttons_btn">Reset</button>
                            </div>
                        </Form>
                    </div>
                )}
            />
        )
    }
}

export default CheckoutForm;