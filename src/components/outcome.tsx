import BaseButton from "./button";

const Outcome = (props: { outcome: string | null | undefined }) => {
  const handleClick = () => {
    console.log("rem");
  };

  return (
    <>
      {!props.outcome && (
        <div className="outcome">
          <div className="result">
            <p>YOU WON!</p>
            <h1>
              <span>{props.outcome}</span> WINS THIS ROUND
            </h1>
            <BaseButton
              className="button--primary"
              onClick={() => {
                handleClick();
              }}
            >
              lorem
            </BaseButton>
            <BaseButton
              className="button--secondary"
              onClick={() => {
                console.log("click");
              }}
            >
              lorem
            </BaseButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Outcome;
