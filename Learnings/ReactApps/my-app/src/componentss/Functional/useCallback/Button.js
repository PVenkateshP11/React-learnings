import React from 'react'

function Button(prop) {
    console.log("show button")
  return (
    <button onClick={prop.clickEvent}>{prop.name}</button>
  )
}

export default React.memo(Button)
