import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

export default function AddPart({ addOrUpdate }) {
  //control form input
  //prevent empty submit - disable submit button
  //display red required asterisk
  const [inputs, setInputs] = React.useState({
    name: "",
    quantity: 0,
    color: "",
  });
  const [error, setError] = React.useState(
    true
  );

  function handleChange(event) {
    console.log(event.target.name);
    setInputs({
      ...inputs,
      [event.target.name]:
        event.target.name === "quantity"
          ? parseInt(event.target.value || 0)
          : event.target.value,
    });

    if (inputs.name && inputs.quantity) setError(false);
    if (!inputs.quantity) setError(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newPart = {
      name: event.target.name.value,
      quantity: parseInt(event.target.quantity.value),
      color: event.target.color?.value,
      id: v4(),
    };

    addOrUpdate([newPart]);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{inputs.name ? null : "* "}Part name: </label>
        <input
          onChange={handleChange}
          value={inputs.name}
          name="name"
          type="text"
          placeholder="Brick 1 x 2"
        />
        <label htmlFor="quantity">
          {inputs.quantity ? null : "* "}Quantity:{" "}
        </label>
        <input
          onChange={handleChange}
          value={inputs.quantity.toString()}
          name="quantity"
          type="number"
          min="0"
          max="10"
          placeholder="0"
        />
        <label htmlFor="color">Color: </label>
        <input
          onChange={handleChange}
          value={inputs.color}
          name="color"
          type="text"
          placeholder="Black"
        />
        <button disabled={error ? true : false}>Add</button>
      </form>
    </div>
  );
}
AddPart.propTypes = {
  addOrUpdate: PropTypes.func,
};
