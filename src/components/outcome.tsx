const Outcome = (props: { outcome: string | null | undefined }) => {
  return (
    <>
      {props.outcome && (
        <div className="outcome">
          <div className="result">
            <p>YOU WON!</p>
            <h1>
              <span>{props.outcome}</span> WINS THIS ROUND
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Outcome;
