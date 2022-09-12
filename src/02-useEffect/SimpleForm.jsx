import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:"strider",
        email:"rodrigo@google.com"
    });

    const { username, email} = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    } 

    useEffect( () => {
        //console.log('useEffect called!');
    },[]);

    useEffect(() => {
        //console.log('formstate cambio')
    }, [formState]);

    useEffect(() => {
        //console.log('email cambio')
    }, [email]);



  return (
    <div>
        <h1> Formulario Simple </h1>
        <hr />

        <input 
            type="text"
            className='form-control'
            placeholder='Usarname'
            name='username'
            value={ username }
            onChange={ onInputChange }/>

        <input 
            type="email"
            className='form-control'
            placeholder='rodrigo@google.com'
            name='email'
            value={ email }
            onChange={ onInputChange }/>

            {
                (username === 'strider2') && <Message />
            }
    </div>
  )
}
