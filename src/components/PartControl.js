import React from "react";
import PartsList from "./PartsList.js";
import PartDetail from "./PartDetail.js";
import AddPart from "./AddPart.js";
import BuySet from "./BuySet.js";
import ErrorBoundary from "./ErrorBoundary.js";
import { useLocalStorageState } from "../custom-hooks.js";

export default function PartControl() {
  const [page, setPage] = React.useState("list"); //list, detail, add, buy
  //custom hook combining useState and useEffect:
  const [parts, setParts] = useLocalStorageState("parts", [
    {
      name: "Brick 1 x 1",
      quantity: 1,
      color: "Black",
      id: "4507511",
    },
  ]);
  const [selectedPart, setSelectedPart] = React.useState(null);

  //newParts is an array
  function addOrUpdate(newParts) {
    //shallow copy of state - we can freely mutate the copy with .slice or .push without mutating actual state
    let partsCopy = [...parts];

    newParts.forEach((part) => {
      let partIndex = partsCopy.findIndex(
        (p) =>
          p.id === part.id || (p.name === part.name && p.color === part.color)
      );
      if (partIndex >= 0) {
        //make a shallow copy of the object at the found index and update the quantity
        let updatedPart = {
          ...partsCopy[partIndex],
          quantity: partsCopy[partIndex].quantity + part.quantity,
        };
        if (updatedPart.quantity <= 0) {
          //delete:
          console.log("deleting", partIndex);
          partsCopy.splice(partIndex, 1);
        } else {
          //update: assign updated object to the copied array at the found index
          partsCopy[partIndex] = updatedPart;
        }
      } else {
        //add if not in state (findIndex returns -1)
        partsCopy.push(part);
      }
    });
    setParts(partsCopy);
    setPage("list");
  }
  function reset() {
    setParts([]);
    setPage("list");
  }

  return (
    <div>
      <button onClick={() => setPage("list")}>View Collection</button>
      <button onClick={() => setPage("add")}>Add a Part</button>
      <button onClick={() => setPage("buy")}>Buy a Set</button>
      <button onClick={reset}>Reset Collection</button>
      {page === "list" ? (
        <PartsList
          parts={parts}
          setSelectedPart={setSelectedPart}
          setPage={setPage}
        />
      ) : page === "add" ? (
        <AddPart addOrUpdate={addOrUpdate} setPage={setPage} />
      ) : page === "detail" ? (
        <PartDetail selectedPart={selectedPart} addOrUpdate={addOrUpdate} />
      ) : page === "buy" ? (
        <ErrorBoundary>
          <BuySet addOrUpdate={addOrUpdate} />
        </ErrorBoundary>
      ) : null}
    </div>
  );
}
