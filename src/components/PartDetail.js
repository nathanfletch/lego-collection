import React from "react";
import PropTypes from "prop-types";

export default function PartDetail({ selectedPart, addOrUpdate }) {
  //add or remove buttons with number input
  const [addInput, setAddInput] = React.useState(0);
  const [removeInput, setRemoveInput] = React.useState(0);

  function handleAddChange(event) {
    const input = parseInt(event.target.value);
    console.log(input);
    if (input) {
      setRemoveInput(0);
      setAddInput(input);
    }
  }
  function handleRemoveChange(event) {
    const input = parseInt(event.target.value);
    console.log(input);
    if (input) {
      setAddInput(0);
      setRemoveInput(input);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    addOrUpdate([
      {
        ...selectedPart,
        quantity: addInput ? addInput : removeInput ? -1 * removeInput : 0,
      },
    ]);
  }
  return (
    <div className="card">
      <h3>{selectedPart.name}</h3>
      <p>Color: {selectedPart.color}</p>
      <p>Quantity: {selectedPart.quantity}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="add">Enter quantity to add: </label>
        <input
          onChange={handleAddChange}
          name="add"
          type="number"
          min={0}
          value={addInput}
        />
        <label htmlFor="remove">Enter quantity to remove: </label>
        <input
          onChange={handleRemoveChange}
          name="remove"
          type="number"
          min={0}
          value={removeInput}
          max={selectedPart.quantity}
        />
        <button>
          {removeInput ? "Remove" : addInput ? "Add" : "Add or Remove"}
        </button>
      </form>
    </div>
  );
}
PartDetail.propTypes = {
  addOrUpdate: PropTypes.func,
};
