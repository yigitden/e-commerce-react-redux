import React from 'react'

const index = ({text,onclick}) => {
  return (
    <div className="row justify-center card-button" onClick={() =>`${onclick}` }>{text}</div>
  )
}

export default index