import React from "react"

const Pizza = (props) => {

  const handleEdit = () => {
    props.editPizzaClick(props); 
  }

  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={handleEdit}type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
