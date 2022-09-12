import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (value) => {
            setCounter( (c) => c + value );
        },
        [],
    )


    /*    
     const incrementFather = () => {
            setCounter( counter + 1 );
        } 
        */

    return (
        <div>
            <h1> useCallback hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />

        </div>
    )
}
