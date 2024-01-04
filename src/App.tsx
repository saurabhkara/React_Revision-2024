// @ts-nocheck
import "./App.css";
import { useState } from "react";
import TicTacBoard from "./component/TicTacBoard.jsx";

const WINING_COND = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
function App() {
  const [moves, setMoves] = useState(new Array(9).fill(null));
  const [xTurn, seXTurn] = useState(true);

  function onClickHandle(e: { target: { dataset: { moveId: any } } }) {
    let moveId = e?.target?.dataset?.moveId;
    if (moveId) {
      let movesArr = [...moves];
      movesArr[moveId] = xTurn ? "x" : "o";
      setMoves(movesArr);
      seXTurn(!xTurn);
    }
  }

  function checkWinner() {
    for (let logic of WINING_COND) {
      const [a, b, c] = logic;
      if (
        moves[a] &&
        moves[a] === moves[b] &&
        moves[b] === moves[c] &&
        moves[a] === moves[c]
      ) {
        return moves[a];
      }
    }
    return false;
  }

  function reset() {
    setMoves(new Array(9).fill(null));
    seXTurn(true);
  }

  const isWon = checkWinner();
  if (isWon) {
    return (
      <div className="App">
        <h1>{isWon && `Match won by ${isWon}`}</h1>
        <button className="reset" onClick={reset}>
          Reset{" "}
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <h3 className="title">Tic Tac Toe Game in React</h3>
      <h4>Next Move {xTurn ? "A" : "B"} Player</h4>
      <TicTacBoard moves={moves} onClickHandle={onClickHandle} />
    </div>
  );
}

export default App;
// console.log(App());a
