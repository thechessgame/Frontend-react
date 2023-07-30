function convertUnicode(input) {
  return input.replace(/\\+u([0-9a-fA-F]{4})/g, (a, b) => String.fromCharCode(parseInt(b, 16)));
}

const RestPieces = (props) => {
  return (
    <>
      <div style={{ fontSize: "25px" }} id={props.id} className={props.className}>
        {convertUnicode(props.children)}
      </div>
    </>
  );
};

export default RestPieces;
