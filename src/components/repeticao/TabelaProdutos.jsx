import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

const TabelaProdutos = (props) => {

  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.key} className={i % 2 === 0 ? 'Par' : 'Impar'}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
        </tr>
      )
    })
  }

  return (
    <div className="TabelaProdutos">
      <table >
        <tr>
          <thead>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </thead>
          <tbody>
              {getLinhas()}
          </tbody>
        </tr>
      </table>
    </div>
  )
}
export default TabelaProdutos 