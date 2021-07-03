import React from 'react'
import DiretaFilho from './DiretaFilho'


// Um pai tem uma referencia para o filho eles se comunicam apartir das propriedades de maneira indireta, 
//fluxo, Pai para filhos (props)
const DiretaPai = (props) => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={20} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Gabriel" idade={17} nerd={false}></DiretaFilho>
    </div>
  )
}

export default DiretaPai