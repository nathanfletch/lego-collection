import React from "react";
import PropTypes from "prop-types";

export default function AddPart({ setParts, setPage }) {
  function handleAdd() {
    const newPart = {
      name: "Brick 1 x 2",
      quantity: 1,
      color: "black",
      id: 4507512,
    };
    setParts((prevParts) => [...prevParts, newPart]);
    setPage("list");
  }
  return (
    <div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
AddPart.propTypes = {
  setParts: PropTypes.func,
  setPage: PropTypes.func,
};
