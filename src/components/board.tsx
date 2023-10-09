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

  const calculateWinner = (squares: [string[]]) => {
    const calculateDraw = squares.every((square) => square != null);
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      } else if (calculateDraw) {
        return "tie";
      } else {
        return null;
      }
    }
  };

  return (
    <div className="board">
      {squares.map((square: string, index) => {
        return <Square value={square} onClick={() => handleClick(index)} />;
      })}
    </div>
  );
};

export default Board;
