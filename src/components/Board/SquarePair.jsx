import classes from "./squarepair.module.css";

const SquarePair = (props) => {
  let even = props.index % 2 == 0;
  return (
    <>
      {props.squarePairs.map((squarePair, i) => {
        let ids = squarePair.split(" ");
        let style = {};
        if (props.index == 0 || props.index == 1) {
          style = { textShadow: "2px 2px 1px black" };
        } else if (props.index == 6 || props.index == 7) {
          style = { textShadow: "2px 2px 1px white" };
        }
        return (
          <>
            <div id={ids[0]} className={`${classes.square} ${even ? classes.odd : classes.even}`}></div>
            <div
              id={ids[1]}
              className={`${classes.square} ${even ? classes.even : classes.odd} ws`}
              style={style}
            ></div>
          </>
        );
      })}
      <br />
    </>
  );
};

export default SquarePair;
