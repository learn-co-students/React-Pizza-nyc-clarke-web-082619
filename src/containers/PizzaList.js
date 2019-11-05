import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  renderPizzas = () => {
    let pizzasArray = [];
    for(const pizza of this.props.pizzas.values()) {
      pizzasArray.push(<Pizza editPizzaClick={this.props.editPizzaClick} {...pizza}/>)
    }
    return pizzasArray;
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.renderPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
