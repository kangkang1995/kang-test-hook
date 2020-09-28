import React, { useEffect, useState,} from 'react';
function useCounter() {
    let [number, setNumber] = useState(0);
    // useEffect(() => {
    //     setInterval(() => {
    //         setNumber(number => number + 1);
    //     }, 1000);
    // }, []);
    return number;
}
function Counter1() {
    let number = useCounter();
    return (
        <div>{number}</div>
    )
}
function Counter2() {
    let number = useCounter();
    return (
        <div>{number}</div>
    )
}

function UseTestHook() {
    return (
        <div>
            <Counter1 />
            <h1 />
            <Counter2 />
        </div>
    )
}
export default UseTestHook;