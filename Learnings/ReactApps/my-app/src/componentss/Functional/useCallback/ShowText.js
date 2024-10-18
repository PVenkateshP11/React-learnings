import React from 'react'

function ShowText(prop) {
    console.log("show text")
  return (
    <div>
      {prop.value}
    </div>
  )
}

export default React.memo(ShowText)
