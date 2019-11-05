import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const API = "http://localhost:3000/pizzas/";
class App extends Component {
  state = {
    pizzas: new Map(),
    editPizza: {}
  }

  handleForm = (name, value) => {
    this.setState((prevState) =>({
      editPizza: {
        ...prevState.editPizza,
        [name]: value
      } 
    }))
  }

  handleSubmit = () => {
    this.setState((prevState) => ({ pizzas: prevState.pizzas.set(this.state.editPizza.id, this.state.editPizza)}))

    fetch(API + this.state.editPizza.id,{
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        ...this.state.editPizza
      })  
    }) 
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(pizzas =>{
        let pizzasMap = new Map()
        pizzas.map(pizza => pizzasMap.set(pizza.id, pizza))
        this.setState(()=>({pizzas: pizzasMap}))    
      })
  }

  editPizzaClick = (props) => {
    this.setState(()=>({
      editPizza: {...props}
    })) 
  }


  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} handleForm={this.handleForm} {...this.state}/>
        <PizzaList editPizzaClick={this.editPizzaClick} {...this.state}/>
      </Fragment>
    );
  }
}

export default App;
