import React from 'react'

const Square = (props) => {
  return (
    <button className={props.cName} onClick={props.onClick}>
      <em>{props.value}</em>
    </button>
  )
}

export default Square
