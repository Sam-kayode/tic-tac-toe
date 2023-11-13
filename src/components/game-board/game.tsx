import { useState } from "react";
import Board from "./board";
import Outcome from "./outcome";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true);

  const handlePlay = (squares: string[]) => {
    setSquares(squares);
    setXIsNext(!xIsNext);
  };



  return (
    <div className="game">
      <Board
        currentSquares={squares}
        xIsNext={xIsNext}
        onPlay={handlePlay}
      ></Board>
      <Outcome squares={squares}/>
    </div>
  );
};

export default Game;
