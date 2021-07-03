import React from 'react'

const FamiliaMembro = (props) => {
  return(
    <p>{props.nome} <strong>{props.sobrenome}</strong></p>
  )
}

export default FamiliaMembro