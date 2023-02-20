import React from "react";

import { Formik, Field, Form } from "formik";

import style from "./style.module.css";


function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  function validateField(value) {
    let error;
    if (!value) {
      error = 'Required';
    }
    return error;
  }

const LoginForm = ({onChangeType, onSubmit}) => {
    return (
    <Formik initialValues ={{email: '', name: '', password: '',}}>
        onSubmit={(values) => console.log(values)}

        {({errors, touched}) => (
        <Form>
            <Field name='email' placeholder='Email' className = {style.input} validate={validateEmail} />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field type='password' name='password' placeholder='Password' className = {style.input} validate={validateField} />
            {errors.password && touched.password && <div>{errors.password}</div>}
            <button type='submit' className={style.mainButton}>Войти</button>
            <button onClick = {() => onChangeType('registration')} className={style.mainButton}>Регистрация</button>
            </Form>
        )};
    </Formik>
    );
}

export default LoginForm;