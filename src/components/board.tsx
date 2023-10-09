import { useState } from "react";
import Square from "./square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(false);

  const handleClick = (index: number) => {
    const squaresCopy = [...squares];
    squaresCopy[index] = xIsNext ? "O" : "X";
    setXIsNext(!xIsNext);
    setSquares(squaresCopy);
  };

  return (
    <div className="board">
      {squares}
      {squares.map((square: string, index) => {
        return <Square value={square} onClick={() => handleClick(index)} />;
      })}
    </div>
  );
};

export default Board;
