import React from 'react'

export const ShowIncrement = ({ increment }) => {

    //console.log('Me volvi a generar :(');

    return (
        <div>
            <button
                className='btn btn-outline-primary'
                onClick={() => {
                    increment( 5 );
                }}>
                Incrementar
            </button>
        </div>
    )
}
