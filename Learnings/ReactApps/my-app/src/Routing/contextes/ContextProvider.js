import React, { createContext } from 'react'

 export const SharedData=createContext()
function ContextProvider(prop) {
  return (
    <SharedData.Provider value={{
        name:"sai",
        designation:"React dev"
    }}
    >
        {prop.children}
    </SharedData.Provider>
  )
}

export default ContextProvider
