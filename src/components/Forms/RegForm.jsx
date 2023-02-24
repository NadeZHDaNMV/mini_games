import React, { useEffect } from 'react';

import { useForm} from 'react-hook-form';

import '../Forms/RegForm.css';


const RegForm = () => {

  
    const {
    register, 
    handleSubmit, 
    reset,
    formState: {errors},
   } = useForm({ mode: 'onBlur' });

  const emailRegex = 
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const onSubmit = (data) => {
    console.log(data);
  } 

    return (
        <form className = 'form' onSubmit = {handleSubmit(onSubmit)}>
          <div className='name'>
            <input 
            {...register('name', {required: true, minLength: {value: 3, message: 'Минимум 3 символа' }})} 
            type ='text' 
            placeholder = 'Enter your nickname'
            
            />
             {errors?.name && <div className='error'>{errors.name.message}</div>}
            </div>
            
            <div className='email'>
            <input 
            {...register('email', {required: true, pattern: {value: emailRegex, message: 'Почта в формате email@mail.com'} })} 
            type ='text' 
            placeholder = 'Enter your email' 
            
            />
            {errors?.email && <div className='error'>{errors.email.message}</div>}
            </div>

            <div className='password'>
            <input 
            {...register('password', {required: true, minLength: {value: 8, message: 'Минимум 8 символов'} })} 
            type ='password' 
            placeholder = 'Enter your password' 
            
            />
            {errors?.password && <div className='error'>{errors.password.message}</div>}
            </div>

            <button className = 'btn__reg' type = 'submit'>Play</button>
            
          
          </form>
    )
}


export default RegForm;