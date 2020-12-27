import React, {useEffect} from "react";

import {useDispatch, useSelector} from 'react-redux';


export default function App() {
    const counter = useSelector(({counter}) => counter)
    const todo = useSelector(({todo}) => todo)
    const dispatch = useDispatch();
    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
                .then(value => value.json())
                .then(value => dispatch({type: 'SET_TODO', payload: value}))
    }, [counter])
    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch({type: 'INC_COUNTER'})}>add</button>
            <button onClick={() => dispatch({type: 'DEC_COUNTER'})}>dec</button>
            <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
            {todo && <div>
                <h3>{todo.id} </h3>
                <h3>{todo.title} </h3>
                <h3>{todo.completed.toString()}</h3>
            </div>}
        </div>
    );
}