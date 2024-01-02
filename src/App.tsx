import "./App.css";
import { useState } from "react";

const playerData = {
  A: "0",
  B: "1",
};

const playerMoves = {
  [playerData.A]: "",
  [playerData.B]: "",
};

const WINING_COND = ["012", "345", "678", "036", "147", "258", "048", "642"];
function App() {
  const [player, setPlayer] = useState(playerData.A);
  const [prevMoves, setPrevMoves] = useState({ ...playerMoves });
  const [won, setWon] = useState<string | null>(null);

  function isWinCheck(winStr: string) {
    const isWin = WINING_COND.some((win) => {
      return winStr.split("").sort().join("").includes(win);
    });
    return isWin;
  }

  function handleClick(e) {
    const whichPlayer = e?.target?.dataset?.playerType;
    const whichMove = e?.target?.dataset?.moveId;
    const togglePlayer =
      whichPlayer === playerData.A ? playerData.B : playerData.A;
    const prev = { ...prevMoves };
    prev[whichPlayer] = `${prev[whichPlayer]}${whichMove}`;

    if (isWinCheck(prev[player])) {
      setWon(player);
      setPlayer(playerData.A);
      setPrevMoves({ ...playerMoves });
    } else {
      setPlayer(togglePlayer);
      setPrevMoves(prev);
    }
  }

  return (
    <div className="App">
      <h3>Tic Tac Toe</h3>
      <h4>Next Move {player === "0" ? "A" : "B"} Player</h4>
      <div className="board" onClick={handleClick}>
        {Array.from(new Array(9)).map((_, index) => {
          let mark = "";
          if (prevMoves[playerData.A].includes(`${index}`)) {
            mark = "X";
          } else if (prevMoves[playerData.B].includes(`${index}`)) {
            mark = "O";
          }

          return (
            <button
              className="btn"
              key={index}
              data-player-type={player}
              data-move-id={index}
            >
              <p>{mark}</p>
            </button>
          );
        })}
      </div>
      <h3>{won ? `Game won by ${player}` : " "}</h3>
    </div>
  );
}

export default App;
// console.log(App());a
