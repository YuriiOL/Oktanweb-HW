import React, { memo, useEffect, useMemo, useReducer, useState} from 'react'

const reducer = (state, action) => {
    switch (action.type){
        case "SET_TODO": {
            return action.payload
        }

        case "CHANGE_TODO_STATUS" : {
            return {
                ...state,
                completed: !state.completed
            }
        }
        case "CHANGE_TODO_TITLE": {
            return{
                ...state,
                title: action.payload
            }
        }
        default: {
            return state
        }
    }
}
const initialState = {
    userId: null,
    id: null,
    title: '',
    completed: false
}

export  default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [user, setUser] = useState({name: 'Yurii', age: 24})
    const [counter, setCounter] = useState(1)

    useEffect(()=>{
        console.log('Iwas called')
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then(json => {
                dispatch({type: "SET_TODO", payload: json})
                console.log(json)
            })
    }, [counter])

    const AddSome = () => {
        // setCounter(counter + 1)
        // setUser((val)=>({
        //     ...val,
        //     age: val.age + 1
        // }))
        setCounter(val => val + 1)
    }
    const ChangeStatus = () => {
        dispatch({ type: "CHANGE_TODO_STATUS"})
    }
    const TitleChange = () => {
        dispatch({ type: "CHANGE_TODO_TITLE", payload: Math.random()})
    }
    return(
        <div className='App'>

            <h1>Hello</h1>
            <p>My name {user.name}</p>
            <p>My age {user.age}</p>
            {!!state && (
                <div>
                    <p>{state.id}</p>
                    <p>{state.title}</p>
                    <p>{state.completed.toString()}</p>
                </div>
            )
            }

            <button onClick={AddSome}>Add</button>
            <button onClick={ChangeStatus}>ChangeStatus</button>
            <button onClick={TitleChange}>ChangeTitle</button>
        </div>
    )
}