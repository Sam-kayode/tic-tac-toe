const Square = (props: { onClick: () => void; value: string }) => {
  return <button onClick={props.onClick} className="square">{props.value}</button>;
};

export default Square;
