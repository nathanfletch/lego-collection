import React from "react";
import PropTypes from "prop-types";

export default function PartsList({ parts, setSelectedPart, setPage }) {
  function handleClick(event) {
    console.log(event.target.id);
    const selectedPart = parts.find((p) => event.target.id == p.id);
    console.log(selectedPart);
    setSelectedPart(selectedPart);
    setPage("detail");
  }

  const partsList = parts.map((p) => (
    <li onClick={handleClick} style={{ listStyle: "none" }} key={p.id}>
      <div id={p.id} className="card">
        <h3>{p.name}</h3>
        <p>Color: {p.color}</p>
        <p>Quantity: {p.quantity}</p>
      </div>
    </li>
  ));
  return (
    <div>
      <h2>My Lego Parts: </h2>
      <ul>{partsList}</ul>
    </div>
  );
}

PartsList.propTypes = {
  parts: PropTypes.array,
  setSelectedPart: PropTypes.func,
  setPage: PropTypes.func,
};
