import BaseButton from "../form/button";

const Outcome = (props: {
  squares: string[];
}) => {
  const handleClick = () => {
    console.log("rem");
  };

  const calculateWinner = () => {
    const squares = props.squares;
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

  const winner = calculateWinner(); 

  return (
    <>
      {winner && (
        <div className="outcome">
          <div className="result">
            <p>YOU WON!</p>
            <h1>
              <span>{winner}</span> WINS THIS ROUND
            </h1>
            <BaseButton
              className="button--primary"
              onClick={() => {
                handleClick();
              }}
            >
              QUIT
            </BaseButton>
            <BaseButton
              className="button--secondary"
              onClick={() => {
                console.log("click");
              }}
            >
              NEXT ROUND
            </BaseButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Outcome;
