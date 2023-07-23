const Content = (props) => {
  return (
    <>
      <div style={{ fontSize: props.fontSize }} className={props.headingClass}>
        {props.headingName}
      </div>
      <div className={props.mediaClass}>
        <div className="">
          <p className={props.textClass}>{props.children}</p>
        </div>
      </div>
    </>
  );
};

export default Content;
