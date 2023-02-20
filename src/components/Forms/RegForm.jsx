import React from 'react';

import { useForm } from 'react-hook-form';

import '../Forms/RegForm.css';


const RegForm = () => {
  const {
    register, 
    handleSubmit, 
    formState: {errors},
   } = useForm({ mode: 'onBlur' });

  const emailRegex = 
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const passwordRegex =
  /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;

  const onSubmit = (data) => {
    alert (JSON.stringify(data));
  }
    return (
        <form className = 'form' onSubmit = {handleSubmit(onSubmit)}>
            <input 
            {...register('name', {required: true, minLength: {value: 3, message: 'Минимальная длина три' }})} 
            type ='text' 
            placeholder = 'Enter your Name'
            autoComplete='off'
            />
             {errors?.name && <div className='error'>{errors.name.message}</div>}
            
            <input 
            {...register('email', {required: true, pattern: {value: emailRegex, message: 'Введите по образцу'} })} 
            type ='text' 
            placeholder = 'Enter your email' 
            autoComplete = 'off'
            />
            {errors?.email && <div className='error'>{errors.email.message}</div>}
            
            <input 
            {...register('password', {required: true, pattern: {value: passwordRegex, message: 'Введите не менее 8 символов'} })} 
            type ='password' 
            placeholder = 'Enter your password' 
            autoComplete = 'off'
            />
            {errors?.password && <div className='error'>{errors.password.message}</div>}

            <button className = 'btn__reg' type = 'submit'>Go!</button>
        </form>
    )
}


export default RegForm;