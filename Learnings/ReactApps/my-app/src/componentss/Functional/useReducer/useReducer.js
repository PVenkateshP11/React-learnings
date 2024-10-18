import React, { useReducer } from 'react'
const reducer=(state,action)=>{
    switch(action.type){
        case"INCREMENT":
        return{count:state.count+1}
        case"DECREMENT":
        return{count:state.count-1}
        case"INCREMENT100":
        return{count:state.count+100}
        case"DECREMENT100":
        return{count:state.count-100}
        case"RESET":
        return{count:0}
        default:
            return state

    }
}

function UseReducer() {
    const[state,dispatch]=useReducer(reducer,{count:0})
    const increment=()=>{
        dispatch({
            type:"INCREMENT"
        })
    }
    const decrement=()=>{
        dispatch({
            type:"DECREMENT"
        })
    }
    const increment100=()=>{
        dispatch({
            type:"INCREMENT100"
        })
    }
    const decrement100=()=>{
        dispatch({
            type:"DECREMENT100"
        })
    }
    const reset=()=>{
        dispatch({
            type:"RESET"
        })
    }
  return (
    <div>
      <h5>{state.count}</h5>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment100}>Increment100</button>
      <button onClick={decrement100}>decrement100</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseReducer
