import React from 'react'

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      <em>{props.value}</em>
    </button>
  )
}

export default Square
