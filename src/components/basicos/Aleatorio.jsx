import React from 'react'

// DESAFIO REACT - FEITO! 13/01/2021

const Aletorio = (props) =>  {

  //destructuring
  // const { min, max} = props

  const aleatorio = parseInt(Math.random() * (props.max - props.min + 1)) + props.min
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p><strong>Valor Mínimo:</strong>{props.min}</p>
      <p><strong>Valor Máximo:</strong>{props.max}</p>
      Número Aleatorio: {aleatorio}
    </div>
  )
}

export default Aletorio