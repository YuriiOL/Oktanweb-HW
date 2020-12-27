import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incCounter, decCounter, resetCounter} from "./redux";
import {fetchTodos} from "./redux/action-creators/todos-action";


// redux structure +
// action types +
// action creators +
// reducer and reducers (combine reducers) +
// thunk + async action calls (e.g. todo list)

export default function App() {
    const { todos, counter } = useSelector(
        ({ counter: { counter }, todos: { todos } }) => ({
            todos,
            counter
        })
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);


    const handleInc = () => dispatch(incCounter());
    const handleDec = () => dispatch(decCounter());
    const handleReset = () => dispatch(resetCounter());

    return (
        <div className="App">
            <h1>Hello CodeSandbox {counter}</h1>
            <button onClick={handleInc}>inc</button>
            <button onClick={handleDec}>dec</button>
            <button onClick={handleReset}>reset</button>

            {todos.map((todo) => (
                <h2>
                    {todo.id} - {todo.title}
                </h2>
            ))}
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}
