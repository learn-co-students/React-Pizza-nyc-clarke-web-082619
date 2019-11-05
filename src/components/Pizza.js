import React from "react";

const handleEditClick = props => {
  props.handleEditClick({
    id: props.id,
    topping: props.topping,
    size: props.size,
    vegetarian: props.vegetarian
  });
};

const Pizza = props => {
  return (
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            handleEditClick(props);
          }}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
