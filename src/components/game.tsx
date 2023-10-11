import { useState } from "react";
import Board from "./board";
import Outcome from "./outcome";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(false);

  const handlePlay = (squares: string[]) => {
    setSquares(squares);
    calculateWinner(squares);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares: string[]) => {
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
        console.log(squares[a] + "wins");
        return squares[a];
      }
    }
    return null;
  };

  return (
    <div>
      <Board
        currentSquares={squares}
        xIsNext={xIsNext}
        onPlay={handlePlay}
      ></Board>
      <Outcome outcome={calculateWinner(squares)} />
    </div>
  );
};

export default Game;
