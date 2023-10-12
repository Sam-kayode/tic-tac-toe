import BaseButton from "../form/button";
import NextPlayer from "./next-player";
import Square from "./square";

const Board = (props: {
  xIsNext: boolean;
  currentSquares: string[];
  onPlay: (a: string[]) => void;
}) => {
  const handleClick = (index: number) => {
    if (props.currentSquares[index]) return;

    const squaresCopy = [...props.currentSquares];

    squaresCopy[index] = props.xIsNext ? "X" : "O";
    props.onPlay(squaresCopy);
  };

  return (
    <>
      <div className="game-info">
        <BaseButton className="button--primary replay" onClick={() => {}}>
          &#x21bb;
        </BaseButton>
        <NextPlayer player={props.xIsNext ? "X" : "O"} />
      </div>

      <div className="board">
        {props.currentSquares.map((square: string, index) => {
          return (
            <Square
              value={square}
              onClick={() => handleClick(index)}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Board;
