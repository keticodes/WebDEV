// useCounter.js tiedosto. Tämä on custom hook, joka sisältää kaikki counterin toiminnot.

import { useState } from 'react';

export const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter + 1);
    };
    const decrement = () => {
        setCounter(counter - 1);
    };
    const reset = () => {
        setCounter(0);
    };

    return{counter, increment, decrement, reset};
};