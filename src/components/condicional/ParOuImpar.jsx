import React from 'react'


const ParOuImpar = (props) => {
  //teste logico
  const isPar = props.numero % 2 === 0
  return (
    <div>
      {/* teste ternario */}
      {isPar ?
        <span>Par</span> :
        <span>Impar</span>}
    </div>
  )
}

export default ParOuImpar