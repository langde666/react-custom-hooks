import { useState } from 'react';

const useArray = (defaultValue) => {
    const [array, setArray] = useState(defaultValue);

    const set = (newArray) => {
        setArray(newArray);
    };

    const push = (element) => {
        setArray(a => [...a, element]);
    };

    const update = (index, newElement) => {
        setArray(a => [...a.slice(0, index), newElement, ...a.slice(index + 1, a.length)]);
    };

    const remove = (index) => {
        setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
    };

    const filter = (callback) => {
        setArray(a => a.filter(callback));
    };

    const clear = () => {
        setArray([]);
    };

    return { array, set, push, update, remove, filter, clear };
};

export default useArray;