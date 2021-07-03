import React, { cloneElement } from 'react'
// import FamiliaMembro from './FamiliaMembro'


// operador spread pega todas as props
// e passa para o filho {...props}

const Familia = (props) => {
  return (
    <div>
      {
        // key parameter solves the render problem
        props.children.map((child, i) => {
          return cloneElement(child, {...props, key: i})
        })
      }
    </div>
  )
}

export default Familia