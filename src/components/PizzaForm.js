import React from "react"

const PizzaForm = (props) => {

  const handleClick = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "vegetarian") {
      value === "Vegetarian" ? value = true : value = false;
    };
    props.handleForm(name, value);
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" onChange={handleClick} className="form-control" placeholder="Pizza Topping" value={
                props.editPizza.topping 
              }/>
        </div>
        <div className="col">
          <select value={props.editPizza.size} onChange={handleClick} name="size" className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={handleClick} name="vegetarian"  type="radio" value="Vegetarian" checked={props.editPizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={handleClick} name="vegetarian" type="radio" value="Not Vegetarian" checked={!props.editPizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
