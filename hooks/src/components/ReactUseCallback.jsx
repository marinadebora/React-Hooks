import React from 'react'
import { useState, useCallback } from 'react'
import FunctionUseCallback from '../FuncionesYHooks/FunctionUseCallback'

const ReactUseCallback = () => {
const [count, setCount] = useState(0);
const [mensaje, setMensaje] = useState('');

const getDoble = useCallback (()=>{
    return count * 2
},[count])
  return (
    <div>
      <h1>useCallback</h1>
        <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>incremento</button>
     <FunctionUseCallback getDoble={getDoble}></FunctionUseCallback>
      <input type="text" onChange={(e)=>setMensaje(e.target.value)}/>
      <p>{mensaje}</p>
    </div>
  )
}

export default ReactUseCallback
