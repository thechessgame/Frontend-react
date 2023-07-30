import { Container, Row } from "reactstrap";
import classes from "./main.module.css";
import UserCard from "./UserCard";
import Board from "./Board";

const restPiecesLeft = [
  [
    {
      id: "fw8",
      pieceCode: "\u2654",
    },
    {
      id: "fw7",
      pieceCode: "\u2654",
    },
    {
      id: "fw6",
      pieceCode: "\u2654",
    },
    {
      id: "fw5",
      pieceCode: "\u2654",
    },
    {
      id: "fw4",
      pieceCode: "\u2654",
    },
    {
      id: "fw3",
      pieceCode: "\u2654",
    },
    {
      id: "fw2",
      pieceCode: "\u2654",
    },
    {
      id: "fw1",
      pieceCode: "\u2654",
    },
  ],
  [
    {
      id: "sw8",
      pieceCode: "\u2654",
    },
    {
      id: "sw7",
      pieceCode: "\u2654",
    },
    {
      id: "sw6",
      pieceCode: "\u2654",
    },
    {
      id: "sw5",
      pieceCode: "\u2654",
    },
    {
      id: "sw4",
      pieceCode: "\u2654",
    },
    {
      id: "sw3",
      pieceCode: "\u2654",
    },
    {
      id: "sw2",
      pieceCode: "\u2654",
    },
    {
      id: "sw1",
      pieceCode: "\u2654",
    },
  ],
];

const restPiecesRight = [
  [
    {
      id: "fb8",
      pieceCode: "\u2654",
    },
    {
      id: "fb7",
      pieceCode: "\u2654",
    },
    {
      id: "fb6",
      pieceCode: "\u2654",
    },
    {
      id: "fb5",
      pieceCode: "\u2654",
    },
    {
      id: "fb4",
      pieceCode: "\u2654",
    },
    {
      id: "fb3",
      pieceCode: "\u2654",
    },
    {
      id: "fb2",
      pieceCode: "\u2654",
    },
    {
      id: "fb1",
      pieceCode: "\u2654",
    },
  ],
  [
    {
      id: "sb8",
      pieceCode: "\u2654",
    },
    {
      id: "sb7",
      pieceCode: "\u2654",
    },
    {
      id: "sb6",
      pieceCode: "\u2654",
    },
    {
      id: "sb5",
      pieceCode: "\u2654",
    },
    {
      id: "sb4",
      pieceCode: "\u2654",
    },
    {
      id: "sb3",
      pieceCode: "\u2654",
    },
    {
      id: "sb2",
      pieceCode: "\u2654",
    },
    {
      id: "sb1",
      pieceCode: "\u2654",
    },
  ],
];

const Main = () => {
  return (
    <>
      <Container id="starter-1" className={`${classes.starter} ${classes["starter-1"]}`}>
        <Row className="">
          <UserCard restPieces={restPiecesLeft} />
          <Board />
          <UserCard restPieces={restPiecesRight} />
        </Row>
      </Container>
    </>
  );
};

export default Main;
