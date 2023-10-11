const Square = (props: { onClick: () => void; value: string }) => {
  return (
    <button
      onClick={props.onClick}
      className={`player-${props.value ==='X' ? "x" : "o"}`}
    >
      {props.value}
    </button>
  );
};

export default Square;
