import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const URL = 'http://localhost:3000/pizzas/'
class App extends Component {
  state={
    pizzas:[],
    editPizzas:[]
  }

  fetchPizzas=()=>{
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      pizzas: data
    }))
  }

  componentDidMount(){
    this.fetchPizzas()
  }

  handleEdit=(pizza)=>{
    this.setState({
      editPizzas: pizza
    })
  }

  handleOnChange=(pizza)=>{
    this.setState({
      editPizzas: pizza
    })
  }

  handleSubmit=(newPizza)=>{
    let pizzaArr = this.state.pizzas.map(pizza=>{
      if(pizza.id === newPizza.id){
        return newPizza
      }else{
        return pizza
      }
    })
    this.setState({
      pizzas : pizzaArr
    })
    fetch(URL + newPizza.id, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({
        id: newPizza.id,
        topping: newPizza.topping,
        size: newPizza.size,
        vegetarian: newPizza.vegetarian
      })
    })
  }
  

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
        pizza={this.state.editPizzas}
        handleSubmit={this.handleSubmit}
        handleOnChange={this.handleOnChange}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          handleEdit={this.handleEdit}
        />
      </Fragment>
    );
  }
}

export default App;
