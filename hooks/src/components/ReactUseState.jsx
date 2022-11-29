import React from 'react'
import { useState } from 'react'

const ReactUseState = () => {
   //Devuelve un valor con estado y una función para actualizarlo.     
   // const [state, setstate] = useState(initialState)
   const [count, setCount] = useState(0)
   let suma= ()=>{
    setCount(count+1)
   }
   let resta= ()=>{
    setCount(count -1)
   }
  return (
    <div>
        <h1>useState</h1>
        <p>{count}</p>
      <button onClick={suma}>+</button>
      <button onClick={resta}>-</button>
    </div>
  )
}

export default ReactUseState
