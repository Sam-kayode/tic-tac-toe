const BaseButton = (props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: string;
  className:string
}) => {
  return <button onClick={props.onClick} className={props.className + ' button'}>{props.children}</button>;
};

export default BaseButton;
