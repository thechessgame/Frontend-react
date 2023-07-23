import classes from "./formgroup.module.css";

const Input = (props) => {
  if (props.name === "button") {
    return (
      <>
        <div className={classes["form-group"]}>
          <button id={classes.submitBtn} type="submit" className="btn">
            Submit
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={classes["form-group"]}>
        <label htmlFor={props.name}>
          {props.labelName}:<sup style={{ color: "red" }}>*</sup>
        </label>
        <br />
        {props.name != "comment" ? (
          <input
            type="text"
            className={classes["form-control"]}
            id={props.name}
            placeholder={props.placeholder}
            name={props.name}
          />
        ) : (
          <textarea
            className={classes["form-control"]}
            rows="5"
            id={props.name}
            placeholder={props.placeholder}
            name={props.name}
          ></textarea>
        )}
      </div>
    </>
  );
};

export default Input;
