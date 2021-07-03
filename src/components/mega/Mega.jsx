import React, {useState} from 'react'
import './Mega.css'
// componente foi refatorado para que usuário consiga
// alterar o range de forma dinâmica

const Mega = (props) => {

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ?
      gerarNumeroNaoContido(min, max, array) : aleatorio
  }
  
  function gerarNumeros(qtde, min, max) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(min, max, nums)
        return[...nums, novoNumero]
      }, [])
      .sort((n1, n2 ) => n1 - n2)
    return numeros
  }
  
  const [min, setMin] = useState(props.min || 1)
  const [max, setMax] = useState(props.max || 60)
  const [qtde, setQtde] = useState(props.qtde || 6)
  const numerosIniciais = gerarNumeros(qtde, min, max)
  const [numeros, setNumeros] = useState(numerosIniciais)
  const validamin = (min === max ? alert('Operação impossivel') : min)
  return(
    <div className="Mega">
      <h2>Mega</h2>
      <h3><strong>{numeros.join('  ')}</strong></h3>
      <div>
        <label htmlFor="">Quantidade de Números </label>
        <input type="number" value={qtde}
        onChange={e => setQtde(+e.target.value)}/>
    
        <label htmlFor="">  De: </label>
        <input type="number" value={min}
        onChange={e => setMin(+e.target.value)}/>
    
        <label htmlFor="">  Até: </label>
        <input type="number" value={max}
        onChange={e => setMax(+e.target.value)}/>
      </div>
      
      <button onClick={_ => setNumeros(gerarNumeros(qtde, validamin , max))}>
        Gerar Números
      </button>
    </div>
  )
}


export default Mega