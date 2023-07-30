import { Fragment } from "react";
import classes from "./play.module.css";
import { Container, Row, Col, Button } from "reactstrap";
import { FaSearch, FaStar } from "react-icons/fa";
import chessgame from "../../assets/chessgame.png";
import profileImg from "../../assets/profile.png";
import { BsPersonLinesFill } from "react-icons/bs";

const Play = () => {
  return (
    <Fragment>
      <Container id="starter" className={`${classes.starter} ${classes["starter"]}`}>
        {/* <ul id="starter2Nav" style={{ "font-size": "13px", "font-weight": "bold" }} class="nav nav-tabs mt-5">
                    <li class="nav-item">
                        <a id="leftStarter2" class="nav-link" href="">NewMatch</a>
                    </li>
                    <li class="nav-item">
                        <a id="middleStarter2" class="nav-link active" href="">Home</a>
                    </li>
                    <li class="nav-item">
                        <a id="rightStarter2" class="nav-link" href="">OldMatch</a>
                    </li>
                </ul> */}
        <Row>
          <Col id="leftSection" className={`${classes.leftSection} col-md-4 pt-5`}>
            <div className={`${classes["right-side"]}`}>
              <h6>
                SEARCH PLAYER FOR NEW MATCH <br />{" "}
                <span style={{ "font-size": "11px" }}>(You can click on play to send request for play new match)</span>
              </h6>
            </div>
            <div className={`${classes.searchbar} ${classes["searchbar-left"]} ${classes["left"]}`}>
              <input
                id="leftSearchText"
                className={classes["search_input"]}
                type="text"
                name=""
                spellcheck="false"
                placeholder="UserName/Name..."
              />
              <a id="leftSearchbtn" className={classes["search-icon"]}>
                <FaSearch />
              </a>
            </div>
            <div id="startPlayer">
              <div style={{ position: "none" }} className={`card ${classes["sp-card-left"]} mt-3 p-2 rounded`}>
                <div className="second d-flex flex-row">
                  <div className="image mr-2">
                    {" "}
                    <img id={classes.playerImg} src={profileImg} className="rounded-circle" width="60" />{" "}
                  </div>
                  <div>
                    <div className={classes.userName}>
                      {" "}
                      <span> User Name</span>
                    </div>
                    <BsPersonLinesFill className={classes.statusIcon} />
                    <span className={classes.status}>Offline</span>

                    {/* <div id="rt" className={classes.ratings}><FaStar /></div> */}
                  </div>
                  <button className={`${classes.playRequest}`}>Play</button>
                </div>
              </div>
            </div>
            <br />
            <div id="leftPaginationSection">
              <nav>
                <ul className={`pagination justify-content-center ${classes["pg-0"]}`}>
                  <li className="page-item">
                    <a id="pg-previous" className={`page-link ${classes["pg-1"]}`} aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li id="pg-first" className="page-item">
                    <a className={`page-link ${classes["pg-2"]} pg-hover`}>1</a>
                  </li>
                  <li id="pg-current" className="page-item">
                    <a className={`page-link ${classes["pg-3"]} pg-active`}>2</a>
                  </li>
                  <li id="pg-last" className="page-item">
                    <a className={`page-link ${classes["pg-4"]} pg-hover`}>3</a>
                  </li>
                  <li className="page-item">
                    <a id="pg-next" className={`page-link ${classes["pg-5"]}`} aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>

          <Col id="middleSection" className="col-md-4">
            <img id={classes.imgStart} src={chessgame} />
            <br />
            <div id="bannerHeading" className={classes["banner-heading"]}>
              PLAY <br />
              <br /> <span style={{ "font-size": "15px" }}>with</span> <br /> FRIENDS
              <br />
            </div>
            <br />
            <br />

            <div
              id="searchMiddlePlay"
              className={`${classes.searchbar} ${classes["searchbar-middle"]} ${classes.middle}`}
            >
              <input
                id={classes.middle_input}
                className={classes.search_input}
                type="text"
                name=""
                spellcheck="false"
                placeholder="UserName"
              />
            </div>
            <br />
            <br />
            <button className={`${classes.middleButton}`}>Play Now</button>
          </Col>
          <Col id="rightSection" className={`col-md-4 pt-5 ${classes.rightSection}`}>
            <div className={classes["right-side"]}>
              <h6>
                SEARCH PLAYER FOR PREVIOUS MATCH <br />{" "}
                <span style={{ "font-size": "11px" }}>
                  (You can click on resume to send request for continue match)
                </span>
              </h6>
            </div>
            <div className="h-100">
              <div className={`${classes.searchbar} ${classes["searchbar-right"]} ${classes.right}`}>
                <input
                  id="rightSearchText"
                  className={classes.search_input}
                  type="text"
                  name=""
                  spellcheck="false"
                  placeholder="UserName/Name..."
                />
                <a id="rightSearchbtn" className={classes["search-icon"]}>
                  <FaSearch />
                </a>
              </div>
              <div id="playerMatches">
                <div style={{ position: "none" }} className={`card ${classes["sp-card-right"]} mt-3 p-2 rounded`}>
                  <div className="second d-flex flex-row">
                    <div className="image mr-2">
                      {" "}
                      <img id={classes.playerImg} src={profileImg} className="rounded-circle" width="60" />{" "}
                    </div>
                    <div>
                      <div className={classes.userName}>
                        {" "}
                        <span> User Name</span>
                      </div>
                      <BsPersonLinesFill className={classes.statusIcon} />
                      <span className={classes.status}>Offline</span>

                      {/* <div id="rt" className={classes.ratings}><FaStar /></div> */}
                    </div>
                    <button className={`${classes.playRequest}`}>Play</button>
                  </div>
                </div>
              </div>
              <br />
              <div id="rightPaginationSection">
                <nav>
                  <ul className={`pagination justify-content-center ${classes["pg-0"]}`}>
                    <li className="page-item">
                      <a id="pg-previous" className={`page-link ${classes["pg-1"]}`} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li id="pg-first" className="page-item">
                      <a className={`page-link ${classes["pg-2"]} pg-hover`}>1</a>
                    </li>
                    <li id="pg-current" className="page-item">
                      <a className={`page-link ${classes["pg-3"]} pg-active`}>2</a>
                    </li>
                    <li id="pg-last" className="page-item">
                      <a className={`page-link ${classes["pg-4"]} pg-hover`}>3</a>
                    </li>
                    <li className="page-item">
                      <a id="pg-next" className={`page-link ${classes["pg-5"]}`} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Play;
