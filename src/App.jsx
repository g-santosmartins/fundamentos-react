import './App.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

// daqui já acessa o membros pois tem componentes filhos
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai.jsx'

import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

// forma mais reduzida com função arrow
// Vamos usar mais essa forma
const App = () =>
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

      <Card titulo="#13 - Mega" color="#550d8f">
        <Mega></Mega>
      </Card>

      <Card titulo="#12 - Contador" color="#120a8f">
        <Contador numeroInicial={10}></Contador>
      </Card>

      <Card titulo="#11 - Componente Controlado (Input)" color="#f08080">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#DAE">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#ffe4c4">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#cd7f32">
        <ParOuImpar numero={2}></ParOuImpar>
        <UsuarioInfo  ></UsuarioInfo>
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#FF432E">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#00C8F8">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#CFC8F5">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Gustavo" />
          <FamiliaMembro nome="Ana" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com parâmetro" color="#1FDA9A">
        <ComParametro
          titulo="Situação do aluno 1 "
          aluno="Mayara "
          nota={10.0}
        />
      </Card>

      <Card titulo="#01 - Primeiro componente" color="#E8B71A">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>

export default App