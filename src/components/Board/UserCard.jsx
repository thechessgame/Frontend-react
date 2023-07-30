import { Col } from "reactstrap";
import classes from "./usercard.module.css";
import profileImg from "../../assets/profile.png";
import { RxCrossCircled } from "react-icons/rx";
import { CiFlag1 } from "react-icons/ci";
import { BiPause } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import RestPieces from "./RestPiece.jsx";

const UserCard = (props) => {
  return (
    <Col id="" className={`${classes["user-card"]} ${classes["user-card-bg"]} col-md-3 mt-3 mb-3`}>
      <div id="">
        <div className={classes["card-block"]}>
          <div className={classes["card-header"]}>
            <h5 id="name" className="mt-2">
              Name
            </h5>
            <h6 style={{ color: "blue" }}>@userName</h6>
          </div>
          <br />
          <div className={classes["user-image"]}>
            <img src={profileImg} className={classes["img-radius"]} alt="" />
          </div>
          <hr />
          <p className={classes["text-dark"]}>WINNING/PLAYING: 1/5</p>
          <button
            style={{ opacity: "50%", cursor: "default", pointerEvents: "none" }}
            className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}
          >
            <RxCrossCircled />
            {/* <i className="far fa-times-circle"></i> */}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            // style={{ opacity: "50%", cursor: "default", pointerEvents: "none" }}
            className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}
          >
            <CiFlag1 />
            {/* <i className={"far fa-flag"}></i> */}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            style={{ opacity: "50%", cursor: "default", pointerEvents: "none" }}
            className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}
          >
            {/* <i class="fas fa-pause"></i> */}
            <BiPause />
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            style={{ opacity: "50%", cursor: "default", pointerEvents: "none" }}
            className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}
          >
            <BsChat />
            {/* <i class="fa fa-comment-o"></i> */}
          </button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {props.restPieces[0].map((data) => (
            <RestPieces key={data.id} id={data.id} className="col-1 rest1">
              {data.pieceCode}
            </RestPieces>
          ))}
        </div>
        <div className="row">
          {props.restPieces[1].map((data) => (
            <RestPieces key={data.id} id={data.id} className="col-1 rest1">
              {data.pieceCode}
            </RestPieces>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default UserCard;
