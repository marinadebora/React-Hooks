import React from 'react'
import { useState, useMemo } from 'react'

const ReactUseMemo = () => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    const sumarValor1=()=>{
        setN1(n1 + 1)
    }
    const sumarValor2=()=>{
        setN2(n2 + 1)
    }
    let total = useMemo(() => {
return n1 + n2
    },[n1, n2])// se ejecuta segun las dependencias que agrego en el array


  return (
    <div>
      <h1>useMemo</h1>
      <p>vlor 1: {n1}</p>
      <p>vlor 2: {n2}</p>
      <button onClick={sumarValor1}>sumar 1</button>
      <button onClick={sumarValor2}>sumar 2</button>
<p>total: {total}</p>
    </div>
  )
}

export default ReactUseMemo
