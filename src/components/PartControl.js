import React from "react";
import PartsList from "./PartsList.js";
import PartDetail from "./PartDetail.js";
import AddPart from "./AddPart.js";
import BuySet from "./BuySet.js";

export default function PartControl() {
  const [page, setPage] = React.useState("list"); //list, detail, add, buy
  const [parts, setParts] = React.useState([
    {
      name: "Brick 1 x 1",
      quantity: 1,
      color: "black",
      id: 4507511,
    },
  ]);

  function handleAddButtonClick(event) {
    setPage("add");
  }
  // function handleBuyButtonClick(event) {
  //   setPage("buy");
  // }

  return (
    <div>
      <button onClick={handleAddButtonClick}>Add a Part</button>
      <button onClick={() => setPage("buy")}>Buy a Set</button>
      {page === "list" ? (
        <PartsList parts={parts} />
      ) : page === "add" ? (
        <AddPart setParts={setParts} setPage={setPage} />
      ) : page === "detail" ? (
        <PartDetail />
      ) : page === "buy" ? (
        <BuySet />
      ) : null}
    </div>
  );
}
