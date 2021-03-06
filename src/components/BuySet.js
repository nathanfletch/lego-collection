import React from "react";
import PropTypes from "prop-types";

export default function BuySet({ addOrUpdate }) {
  function handleSubmit(event) {
    event.preventDefault();
    const setNum = event.target.setNum.value || 11717;
    console.log(setNum);
    fetch(
      `https://rebrickable.com/api/v3/lego/sets/${setNum}-1/parts/?key=${process.env.REACT_APP_API_KE}&inc_part_details=1&inc_color_details=0`
    )
      .then((response) => response.json())
      .then(
        (jsonResponse) => {
          console.log(jsonResponse);
          if (!jsonResponse.results) {
            //why does this even run this first callback? shouldn't it go to catch?
            throw new Error(jsonResponse.detail);
          }
          //not catching here for some reason - need to catch in the list render
          const newParts = jsonResponse.results.map((result) => {
            return {
              id: result.id,
              name: result.part.name,
              color: result.color.name,
              quantity: result.quantity,
            };
          });
          console.log(newParts);
          addOrUpdate(newParts);
        },
        (error) => {
          throw error;
        }
      )
      .catch((error) => {
        console.log("hi from .catch");
        throw error;
      });
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

BuySet.propTypes = {
  addOrUpdate: PropTypes.func,
};
