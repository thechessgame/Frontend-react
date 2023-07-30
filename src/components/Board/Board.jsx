import { Col } from "reactstrap";
import SquarePair from "./SquarePair";

const square = [
  ["a0 b0", "c0 d0", "e0 f0", "g0 h0"],
  ["a1 b1", "c1 d1", "e1 f1", "g1 h1"],
  ["a2 b2", "c2 d2", "e2 f2", "g2 h2"],
  ["a3 b3", "c3 d3", "e3 f3", "g3 h3"],
  ["a4 b4", "c4 d4", "e4 f4", "g4 h4"],
  ["a5 b5", "c5 d5", "e5 f5", "g5 h5"],
  ["a6 b6", "c6 d6", "e6 f6", "g6 h6"],
  ["a7 b7", "c7 d7", "e7 f7", "g7 h7"],
];

const Board = (props) => {
  return (
    <>
      <Col className="col-xl-6 d-flex justify-content-center mt-4 mb-3">
        <div id="board">
          {square.map((data, index) => {
            return <SquarePair squarePairs={data} index={index} />;
          })}
        </div>
      </Col>
    </>
  );
};

export default Board;
