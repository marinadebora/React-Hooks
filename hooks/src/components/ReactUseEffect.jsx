import React from 'react'
import { useEffect } from 'react'

const ReactUseEffect = () => {
    useEffect(() => {
    console.log('montando el useEffect')
    })
  return (
    <div>
      <h1>useEffect</h1>
      <p>ver en consola</p>
    </div>
  )
}

export default ReactUseEffect
