import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./state3/reducer";
import { useEffect } from "react";
const Counter = () => {
    const count = useSelector((state) => state.counterr.value);
    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < 100000000; i++) {
            sum += i;
        }
        console.log(sum);
    }, [])

    const dispatch = useDispatch();
    return (
        <>
            <span>Counter: {count}</span>
            <button onClick={() => dispatch(increment(2))}>Increment</button>
            <button onClick={() => dispatch(decrement(2))}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    );
};

export default Counter;