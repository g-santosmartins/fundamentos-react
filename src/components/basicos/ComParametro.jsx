import React from "react";

// passamos propriedades apartir de props com react

export default function ComParametro(props) {
  // console.log(props)
  const status =  props.nota >= 7 ? ' Aprovado' : ' de recuperação'
  return(
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno }</strong>
        tem nota: 
        <strong>{props.nota}</strong>
        
        <p>
          E está 
          <strong>{status}</strong>!
        </p>
      </p>
    </div>
  )
}