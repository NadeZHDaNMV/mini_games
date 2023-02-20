import React, { useState } from 'react';

import '../Forms/Form.css';




const Form = ({onFormSubmit}) => {
   // устанавливаем исходное состояние, которое можно изменять с помощью функции onChange
    const [formData, setFormData] = useState ({
        name: '',
        lastName: '',
        password: '',
    });

    const onInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    //отмена перезагрузки страницы браузера по умолчанию при нажатии кнопки
    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
    }
    
    return (
        <form className = 'form' onSubmit = {onSubmit}>
            <input type ='text' name = 'name' placeholder = 'Enter your Name' value={formData.name} onChange = {onInputChange}/>
            <input type ='text' name = 'lastName' placeholder = 'Enter your Last Name' value={formData.lastName} onChange = {onInputChange}/>
            <input type ='password' name = 'password' placeholder = 'Password' value={formData.password} onChange = {onInputChange}/>
            <button type = 'submit'>Go!</button>
        </form>
    )
}


export default Form;