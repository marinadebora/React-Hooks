import { useState, useEffect } from "react"

const FunctionUseCallback = ({getDoble}) => {
 const [doble, setDoble] = useState(0)

useEffect(() => {
  setDoble(getDoble())
  console.log('renderiza hijo')
}, [getDoble]);

return(
    <h2>{doble}</h2>
)
}

export default FunctionUseCallback
