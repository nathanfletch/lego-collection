import React from "react";

export default function PartDetail({ selectedPart }) {
  //add or remove buttons with number input

  return (
    <div className="card">
      <h3>{selectedPart.name}</h3>
      <p>Color: {selectedPart.color}</p>
      <p>Quantity: {selectedPart.quantity}</p>
    </div>
  );
}
