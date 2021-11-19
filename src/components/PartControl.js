import React from "react";
import PartsList from "./PartsList.js";
import PartDetail from "./PartDetail.js";
import AddPart from "./AddPart.js";
import BuySet from "./BuySet.js";
import { v4 } from "uuid";

export default function PartControl() {
  const [page, setPage] = React.useState(null); //list, detail, add, buy
  // const [parts, setParts] = React.useState([
  //   {
  //     name: "Brick 1 x 1",
  //     quantity: 1,
  //     color: "black",
  //     id: v4(),
  //   },
  // ]);

  function handleAdd(event) {
    setPage("add");
  }
  function handleBuy(event) {
    setPage("buy");
  }

  return (
    <div>
      <button onClick={handleAdd}>Add A Part</button>
      <button onClick={handleBuy}>Buy A Set</button>
      {page === "list" ? (
        <PartsList />
      ) : page === "add" ? (
        <AddPart />
      ) : page === "detail" ? (
        <PartDetail />
      ) : page === "buy" ? (
        <BuySet />
      ) : null}
    </div>
  );
}
