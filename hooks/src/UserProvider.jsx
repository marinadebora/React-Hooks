import React, { useContext} from 'react'
import { useState } from 'react';

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext(){
    return useContext(userContext)
}
export function useUserToggleContext(){
    return useContext(userToggleContext)
}


const UserProvider = ({children}) => {
    const [user, setsUser] = useState(null)
    const cambiaLogin= ()=>{
      if(user){
        setsUser(null)
        }else{
          setsUser({
            name: 'pepito',
            email: 'conejopepito@gmail.com'
          })
        }
    }

  return (
    <userContext.Provider value={user}>
<userToggleContext.Provider value={cambiaLogin}>
{children}
</userToggleContext.Provider>
    </userContext.Provider>
  )
}

export default UserProvider
