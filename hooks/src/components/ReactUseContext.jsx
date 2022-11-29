import React from 'react'
import { useUserContext, useUserToggleContext } from '../UserProvider'


const ReactUseContext = () => {
  const user = useUserContext()
  const cambiaLogin = useUserToggleContext()
    return (
    <div>
      <h1>useContext</h1>
      {
        user&& <p>name: {user.name}</p>
      }
          <button onClick={cambiaLogin}>activa useContext</button>

    </div>
  )
}

export default ReactUseContext
