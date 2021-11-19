import React from "react";
import PropTypes from "prop-types";

export default function PartsList({ parts }) {
  const partsList = parts.map((p) => (
    <li style={{ listStyle: "none" }} key={p.id}>
      <div className="card">
        <h3>{p.name}</h3>
        <p>Color: {p.color}</p>
        <p>Quantity:{p.quantity}</p>
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
};
