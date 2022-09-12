import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const prueba = () => {
        //document.querySelector('input').select();
        //console.log(inputRef);
        inputRef.current.select();
    }
  return (
    <div>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef }
            type='text'
            placeholder='Ingrese su nombre'
            className='form-control'/>

        <button 
            className='btn mt-2'
            onClick={prueba}>
            Set Focus
        </button>    
    </div>
  )
}
