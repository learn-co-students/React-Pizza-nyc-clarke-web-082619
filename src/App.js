import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzas: [],
    currentPizza: null 
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({
        pizzas: data
      })
    })
  }

  editPizza = (id) => {
    let currentPizza=this.state.pizzas.find(pizza => pizza.id === id);
    // console.log(currentPizza)
    this.setState({
      currentPizza: currentPizza
    })
  }

  changeTopping = (event) => {
    // console.log(event.target.value);
    this.setState({
      currentPizza: {...this.state.currentPizza, topping: event.target.value}
    })
  }

  changeSize = (event) => {
    // console.log(event.target.value)
    this.setState({
      currentPizza: {...this.state.currentPizza, size:event.target.value}
    })
  }

  changeVege = (event) => {
    if(this.state.currentPizza){
      if(event.target.value==='Vegetarian'){
        if(this.state.currentPizza.vegetarian === true){
          console.log('already true');
        }else{
          this.setState({
            currentPizza: {...this.state.currentPizza, vegetarian: true}
          })
        }
      }else if(event.target.value==='Not Vegetarian'){
        if(this.state.currentPizza.vegetarian === false){
          console.log('already false');
        }else{
          this.setState({
            currentPizza: {...this.state.currentPizza, vegetarian: false}
          })
        }
      }
    }
  }

  submitChange = (id) => {
    let newArray = this.state.pizzas.map(pizza => {
      if(pizza.id === id){
        return (this.state.currentPizza)
      }else{
        return pizza
      }
    })
    this.setState({
      pizzas: newArray,
      currentPizza: this.state.currentPizza
    })

    fetch('http://localhost:3000/pizzas/'+id, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "topping": this.state.currentPizza.topping,
        "size": this.state.currentPizza.size,
        "vegetarian": this.state.currentPizza.vegetarian
      })
    }).then(resp=>resp.json())
    .then(data=>console.log(data));
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.currentPizza}
                changeTopping={this.changeTopping} 
                changeSize={this.changeSize}
                changeVege={this.changeVege}
                submitChange={this.submitChange}/>
        <PizzaList pizzas={this.state.pizzas} 
                   editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
