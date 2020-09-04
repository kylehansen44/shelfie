import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: {
        name: 'xbox',
        price: 490,
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Xbox-console.jpg'
      }
      
    }
  }



  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">
        <Dashboard products={this.state.inventory} />
        <Form />
        <Header />
      </div>
    )
  }
}

export default App;
