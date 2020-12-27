import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
export  default function App() {
    const counter = useSelector(({counter})=> counter)
    const dispatch = useDispatch()
    return(
        <div className='App'>
           <h1>Counter {counter}</h1>
            <button onClick={()=>dispatch({type: 'INC_COUNTER'})}>ADD</button>
            <button onClick={()=>dispatch({type: 'DEC_COUNTER'})}>DEC</button>
            <button onClick={()=>dispatch({type: 'RESET'})}>RES</button>
        </div>
    )
}