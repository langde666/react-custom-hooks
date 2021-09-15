import { useState } from 'react';
import useTimeout from "./useTimeout";

const TimeoutComponent = () => {
    const [count, setCount] = useState(10);
    const { reset, clear } = useTimeout(() => setCount(c => c - 1), 2000);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={() => reset()}>Reset Timeout</button>
            <button onClick={() => clear()}>Clear Timeout</button>
        </div>
    );
};

export default TimeoutComponent;