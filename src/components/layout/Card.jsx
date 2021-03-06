import React from "react";
import './Card.css'

 const Card = (props) => {

  const colorStyle =  {
    backgroundColor: props.color || "#F00",
    borderColor: props.color || "#F00"
  }
  return (
    <div className="Card" style={colorStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  )
}

export default Card