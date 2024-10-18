import React from 'react'

function Heading() {
    console.log("show heading")
  return (
    <div>
      Heading
    </div>
  )
}

export default React.memo(Heading)
