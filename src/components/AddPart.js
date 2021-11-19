import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

export default function AddPart({ setParts, setPage }) {
  //control form input
  //prevent empty submit - disable submit button
  //display red required asterisk
  function handleSubmit(event) {
    event.preventDefault();

    const newPart = {
      name: event.target.name.value,
      quantity: parseInt(event.target.quantity.value),
      color: event.target.color.value,
      id: v4(),
    };
    
    setParts((prevParts) => [...prevParts, newPart]);
    setPage("list");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Part name: </label>
        <input name="name" type="text" placeholder="Brick 1 x 2" />
        <label htmlFor="quantity">Quantity: </label>
        <input name="quantity" type="number" min="0" max="10" placeholder="0" />
        <label htmlFor="color">Color: </label>
        <input name="color" type="text" placeholder="Black" />
        <button>Add</button>
      </form>
    </div>
  );
}
AddPart.propTypes = {
  setParts: PropTypes.func,
  setPage: PropTypes.func,
};
