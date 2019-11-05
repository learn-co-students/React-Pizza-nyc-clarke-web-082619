import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: [],
      editForm: { id: null, topping: null, size: null, vegetarian: null }
    };
  }

  getPizzas = () => {
    fetch("http://localhost:3000/pizzas")
      .then(response => response.json())
      .then(json => {
        this.setState({
          pizzas: json
        });
      });
  };

  componentDidMount() {
    this.getPizzas();
  }

  handleEditClick = editForm => {
    this.setState({
      editForm: editForm
    });
  };

  onFormChange = editForm => {
    this.setState({
      editForm: editForm
    });
  };

  handleFormSubmit = () => {
    if (
      this.state.editForm.topping === null ||
      this.state.editForm.size === null ||
      this.state.vegetarian === null
    ) {
      return false;
    } else {
      let configObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(this.state.editForm)
      };
      fetch(`http://localhost:3000/pizzas/${this.state.editForm.id}`, configObj)
        .then(response => response.json())
        .then(json => {
          this.getPizzas();
        });
    }
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          {...this.state.editForm}
          handleFormSubmit={this.handleFormSubmit}
          onFormChange={this.onFormChange}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          handleEditClick={this.handleEditClick}
        />
      </Fragment>
    );
  }
}

export default App;
