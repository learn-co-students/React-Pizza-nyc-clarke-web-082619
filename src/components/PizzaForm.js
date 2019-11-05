import React from "react"

const PizzaForm = (props) => {

  const handleChange = (event) => {
    const updatedPizza = { 
      ...props.pizza,
       [event.target.name]: event.target.value
    }
    props.handleOnChange(updatedPizza)
  }
  
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text"
              name="topping"
              className="form-control" 
              placeholder="Pizza Topping" 
              onChange={handleChange}
              value={
                props.pizza.topping
              }/>
        </div>
        <div className="col">
          <select
            name="size"
            onChange={handleChange} 
            value={props.pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input"
              name="vegetarian"
              onChange={handleChange}
              type="radio" value={true} checked={props.pizza.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
              name="vegetarian"
              onChange={handleChange}
              type="radio" value="" checked={
              props.pizza.vegetarian ? false : true
              }/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>props.handleSubmit(props.pizza)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
