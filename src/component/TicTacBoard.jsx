import Block from "./Block";

function TicTacBoard({ onClickHandle, moves }) {
  return (
    <div className="board" onClick={onClickHandle}>
      {moves.map((_, index) => {
        return <Block key={index} num={index} sign={moves[index]} />;
      })}
    </div>
  );
}
export default TicTacBoard;
