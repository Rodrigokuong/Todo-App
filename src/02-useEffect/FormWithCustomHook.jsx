import React from 'react'
import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';



export const FormWithCustomHook = () => {

    const { onResetForm, formState, onInputChange, username, email, password } = useForm(
        {
            username: "",
            email: "",
            password: ""
        }
    )
    //const {username,email,password} = formState;


    return (
        <div>
            <h1> Formulario con custom hook </h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='Usarname'
                name='username'
                value={username}
                onChange={onInputChange} />

            <input
                type="email"
                className='form-control'
                placeholder='rodrigo@google.com'
                name='email'
                value={email}
                onChange={onInputChange} />
            <input
                type="password"
                className='form-control'
                placeholder='Contraseña'
                name='password'
                value={password}
                onChange={onInputChange} />

            <button
                onClick={onResetForm}
                className='btn btn-primary mt-2'>Borrar</button>
        </div>
    )
}
