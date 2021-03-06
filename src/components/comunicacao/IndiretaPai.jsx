import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = (props) => {
 
  let [nome, setNome] = useState('?')
  let [idade, setIdade] = useState(0)
  let [nerd, setNerd] = useState(false)
  
  // Passaremos nome idade e nerd(bool)
  // Mas usando o filho
  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>{idade} </span>
        <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  )
}

export default IndiretaPai