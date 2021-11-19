import React from "react";

export default function BuySet() {
  function handleSubmit(event) {
    event.preventDefault();
    const setNum = event.target.setNum.value || 11717;
    console.log(setNum);
    fetch(
      `https://rebrickable.com/api/v3/lego/sets/${setNum}-1/parts/?key=${process.env.REACT_APP_API_KEY}&inc_part_details=1&inc_color_details=0`
    ).then(
      (newParts) => console.log(newParts),
      (error) => console.log(error)
    );
  }
  return (
    <div>
      <h2>Buy a New Lego Set</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="setNum">Enter set number: </label>
        <input name="setNum" type="text" placeholder="11717" />
        <button>Buy</button>
      </form>
    </div>
  );
}
