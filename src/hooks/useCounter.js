import { useState } from "react"

export const useCounter = ( initialValue = 1) => {
    
    const [counter, setContuner] = useState( initialValue);

    const increment = ( value = 1) => {
        setContuner(counter + value);
    }

    const decrement = ( value = -1) => {
        if( counter === 0) return;
        setContuner(counter - value);
    }

    const reset = () => {
        setContuner(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}