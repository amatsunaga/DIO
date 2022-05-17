import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Aula Aprenda a configurar o ReactJS
// function sum(a, b) {
//   return a + b
// }

// function primeiroJSX() {
//   return(
//     <div className="teste">
//       Andrea Matsunaga - Introdução ao ReactJS
//       <h1>Soma: {sum(10,20)}</h1>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div className="App">
//       {primeiroJSX()}
//     </div>
//   )
// }

// const rootElement = document.getElementById("root")
// ReactDOM.render(<App />, rootElement)

//Aula Renderizando elementos
// const element = 'Digital Innovation'
// const element2 = <h1>Olá Turma =D</h1> 

// function App() {
//   return (
//     <div>
//       {element}
//       {element2}
//     </div>
//   )
// }

// const rootElement = document.getElementById("root")
// ReactDOM.render(<App />, rootElement)

// Components

// import Button from './Button'
// import ComponentA from './ComponentA'
// import ComponentB from './ComponentB'

// function soma(a, b) {
//   alert(a + b)
// }

// function App() {


//   return (
//     <div className="App">
//       Hello World
//       <Button onClick={() => soma(10,20)} name='Andrea Matsunaga'/>
//       <ComponentA>
//         <ComponentB>
//         <Button onClick={() => soma(40,20)} name='Morgana Machado'/>
//         </ComponentB>
//       </ComponentA>
//     </div>
//   )
// }

// const rootElement = document.getElementById("root")
// ReactDOM.render(<App />, rootElement)

//Lifecycle
import { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  render() {
    const {clock, copo} = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)