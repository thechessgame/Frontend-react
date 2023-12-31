import { Container } from "reactstrap";
import classes from "./rule.module.css";
import Content from "./Content";

let ruleContent = [
  {
    fontSize: "28px",
    headingClass: classes.heading,
    headingName: "Chess Game",
    mediaClass: classes.media,
    textClass: classes.text,
    text: `Chess is a recreational and competitive board game played between two players. It is an abstract
    strategy game and involves no hidden information. It is played on a square chessboard with 64 squares
    arranged in an eight-by-eight grid. At the start, each player (one controlling the white pieces, the
    other controlling the black pieces) controls sixteen pieces: one king, one queen, two rooks,
    two knights, two bishops, and eight pawns. The object of the game is to checkmate the opponent's king,
    whereby the king is under immediate attack (in "check") and there is no way to remove it from attack on
    the next move. There are also several ways a game can end in a draw.`,
  },
  {
    fontSize: "23.5px",
    headingClass: `${classes.heading} ${classes.underline}`,
    headingName: "Setup",
    mediaClass: classes.media,
    textClass: classes.text,
    text: `The game is played on a square board of eight columns (called files, denoted a to h from left to right
        according to White's perspective) and eight rows (called ranks, denoted 1 to 8 from bottom to top
        according to White's perspective). The 64 squares alternate in color and are referred to as light and
        dark squares. The chessboard is placed with a light square at the right-hand corner nearest to each
        player. Thus, each queen starts on a square of its own color.`,
  },
  {
    fontSize: "20px",
    headingClass: classes.headingStyle,
    headingName: "King",
    mediaClass: classes.media,
    textClass: classes.text,
    text: `A king moves one square in any direction. Once in every game, each king can make a special move, known as
    castling. Castling consists of moving the king two squares along the first rank toward a rook on the
    player's first rank, and then placing the rook on the last square that the king crossed. Castling is
    permissible if the following three conditions are met:
    1. neither the king nor the rook has previously moved during the game. 
    2. there are no pieces between the king and the rook.
    3. the king is not in check, and will not pass through or land on any square attacked by an enemy
    piece.
    (Note that castling is permitted if the rook is under attack, or if the rook crosses an
    attacked square.)`,
  },
  {
    fontSize: "20px",
    headingClass: classes.headingStyle,
    headingName: "Queen",
    mediaClass: classes.media,
    textClass: classes.text,
    text: `A queen combines the power of a rook and bishop and can move any number of squares along a rank, file, or
    diagonal, but cannot leap over other pieces.`,
  },
  {
    fontSize: "20px",
    headingClass: classes.headingStyle,
    headingName: "Rook",
    mediaClass: classes.media,
    textClass: classes.text,
    text: `A rook can move any number of squares along a rank or file, but cannot leap over other pieces. Along with
    the king, a rook is involved during the king's castling move.`,
  },
  {
    fontSize: "20px",
    headingClass: classes.headingStyle,
    headingName: "Bishop",
    mediaClass: classes.media,
    textClass: classes.text,
    text: `A bishop can move any number of squares diagonally, but cannot leap over other pieces.`,
  },
  {
    fontSize: "20px",
    headingClass: classes.headingStyle,
    headingName: "Knight",
    mediaClass: classes.media,
    textClass: classes.text,
    text: `A knight moves to any of the closest squares that are not on the same rank, file, or diagonal. (Thus the
        move forms an "L"-shape: two squares vertically and one square horizontally, or two squares horizontally and
        one square vertically.) The knight is the only piece that can leap over other pieces.`,
  },
  {
    fontSize: "20px",
    headingClass: classes.headingStyle,
    headingName: "Pawn",
    mediaClass: classes.media,
    textClass: classes.text,
    text: `A pawn can move forward to the unoccupied square immediately in front of it on the same file, or on its
    first move it can advance two squares along the same file, provided both squares are unoccupied (white dots
    in the diagram above); or the pawn can capture an opponent's piece on a square diagonally in front of it on
    an adjacent file, by moving to that square (black "x"s). When a pawn makes a two-step advance from its
    starting position and there is an opponent's pawn on a square next to the destination square on an adjacent
    file, then the opponent's pawn can capture it en passant ("in passing"), moving to the square the pawn
    passed over. This can be done only on the very next turn; otherwise, the right to do so is forfeited.`,
  },
  {
    fontSize: "24px",
    headingClass: `${classes.heading} ${classes.underline}`,
    headingName: "Check",
    mediaClass: classes.media,
    textClass: classes.text,
    text: `When a king is under immediate attack by one or two of the opponent's pieces, it is said to be in check. A
    move in response to a check is legal only if it results in a position where the king is no longer in check.
    This can involve capturing the checking piece; interposing a piece between the checking piece and the king
    (which is possible only if the attacking piece is a queen, rook, or bishop and there is a square between it
    and the king); or moving the king to a square where it is not under attack. Castling is not a permissible
    response to a check. The object of the game is to checkmate the opponent; this occurs when the opponent's
    king is in check, and there is no legal way to remove it from attack. It is never legal for a player to make
    a move that puts or leaves the player's own king in check. In casual games, it is common to announce "check"
    when putting the opponent's king in check, but this is not required by the rules of chess and is not usually
    done in tournaments.`,
  },
];

const RuleContent = () => {
  return (
    <>
      <Container id={classes.rule}>
        <ul className={classes["list-unstyled"]}>
          {ruleContent.map((data, i) => {
            return (
              <Content
                key={i}
                fontSize={data.fontSize}
                headingClass={data.headingClass}
                headingName={data.headingName}
                mediaClass={data.mediaClass}
                textClass={data.textClass}
              >
                {data.text}
              </Content>
            );
          })}
          <footer style={{ "marginLeft": "80%", color: "#f8f8ff" }}>~ Source WIKIPEDIA</footer>
        </ul>
      </Container>
    </>
  );
};

export default RuleContent;
