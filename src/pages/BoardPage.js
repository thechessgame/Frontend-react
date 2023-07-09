import profileImg from "../assets/profile.png";
import { Container, Row, Col } from 'reactstrap';
import classes from './board.module.css';
import { RxCrossCircled } from "react-icons/rx";
import { CiFlag1 } from "react-icons/ci";
import { BiPause } from "react-icons/bi";
import { BsChat } from "react-icons/bs"

const BoardPage = () => {
    return <>
        <Container id="starter-1" className={`${classes.starter} ${classes["starter-1"]}`}>
            <Row className="">
                <Col id="" className={`${classes["user-card"]} ${classes["user-card-bg"]} col-md-3 mt-3 mb-3`}>
                    <div id="">
                        <div className={classes["card-block"]}>
                            <div className={classes["card-header"]}>
                                <h5 id="name" className="mt-2">Name</h5>
                                <h6 style={{ "color": "blue" }}>@userName</h6>
                            </div><br />
                            <div className={classes["user-image"]}>
                                <img
                                    src={profileImg}
                                    className={classes["img-radius"]}
                                    alt=""
                                />
                            </div>
                            <hr />

                            <p className={classes["text-dark"]}>WINNING/PLAYING: 1/5</p>

                            <button style={{ "opacity": "50%", "cursor": "default", "pointer-events": "none" }} className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}>
                                <RxCrossCircled />
                                {/* <i className="far fa-times-circle"></i> */}
                            </button>&nbsp;&nbsp;&nbsp;

                            <button style={{ "opacity": "50%", "cursor": "default", "pointer-events": "none" }} className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}>
                                <CiFlag1 />
                                {/* <i className={"far fa-flag"}></i> */}
                            </button>&nbsp;&nbsp;&nbsp;

                            <button style={{ "opacity": "50%", "cursor": "default", "pointer-events": "none" }} className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}>
                                {/* <i class="fas fa-pause"></i> */}
                                <BiPause />
                            </button>&nbsp;&nbsp;&nbsp;

                            <button style={{ "opacity": "50%", "cursor": "default", "pointer-events": "none" }} className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}>

                                <BsChat />
                                {/* <i class="fa fa-comment-o"></i> */}
                            </button>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div style={{ "font-size": "25px" }} id="fw8" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="fw7" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="fw6" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="fw5" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="fw4" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="fw3" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="fw2" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="fw1" className="col-1 rest1"></div>
                        </div>
                        <div className="row">
                            <div style={{ "font-size": "25px" }} id="sw8" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="sw7" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="sw6" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="sw5" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="sw4" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="sw3" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="sw2" className="col-1 rest1"></div>
                            <div style={{ "font-size": "25px" }} id="sw1" className="col-1 rest1"></div>
                        </div>
                    </div>
                </Col>

                <Col className="col-xl-6 d-flex justify-content-center mt-4 mb-3">
                    <div id="board">
                        <div id="a0" className={`${classes.square} ${classes.odd}`}></div>
                        <div
                            id="b0"
                            className={`${classes.square} ${classes.even} ws`}
                            style={{
                                "text-shadow": "2px 2px 1px white"
                            }}
                        ></div>
                        <div id="c0" className={`${classes.square} ${classes.odd}`}></div>
                        <div
                            id="d0"
                            className={`${classes.square} ${classes.even} ws`}
                            style={{
                                "text-shadow": "2px 2px 1px white"
                            }}
                        ></div>
                        <div id="e0" className={`${classes.square} ${classes.odd}`}></div>
                        <div
                            id="f0"
                            className={`${classes.square} ${classes.even} ws`}
                            style={{
                                "text-shadow": "2px 2px 1px white"
                            }}
                        ></div>
                        <div id="g0" className={`${classes.square} ${classes.odd}`}></div>
                        <div
                            id="h0"
                            className={`${classes.square} ${classes.even} ws`}
                            style={{
                                "text-shadow": "2px 2px 1px white"
                            }}
                        ></div>
                        <br />
                        <div
                            id="a1"
                            className={`${classes.square} ${classes.even} ws`}
                            style={{
                                "text-shadow": "2px 2px 1px white"
                            }}
                        ></div>
                        <div id="b1" className={`${classes.square} ${classes.odd}`}></div>
                        <div
                            id="c1"
                            className={`${classes.square} ${classes.even} ws`}
                            style={{ "text-shadow": "2px 2px 1px white" }}
                        ></div >
                        <div id="d1" className={`${classes.square} ${classes.odd}`}></div>
                        <div
                            id="e1"
                            className={`${classes.square} ${classes.even} ws`}
                            style={{ "text-shadow": "2px 2px 1px white" }}
                        ></div >
                        <div id="f1" className={`${classes.square} ${classes.odd}`}></div>
                        <div
                            id="g1"
                            className={`${classes.square} ${classes.even} ws`}
                            style={{ "text-shadow": "2px 2px 1px white" }}
                        ></div>
                        <div id="h1" className={`${classes.square} ${classes.odd}`}></div>
                        <br />
                        <div id="a2" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="b2" className={`${classes.square} ${classes.even}`}></div>
                        <div id="c2" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="d2" className={`${classes.square} ${classes.even}`}></div>
                        <div id="e2" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="f2" className={`${classes.square} ${classes.even}`}></div>
                        <div id="g2" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="h2" className={`${classes.square} ${classes.even}`}></div>
                        <br />
                        <div id="a3" className={`${classes.square} ${classes.even}`}></div>
                        <div id="b3" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="c3" className={`${classes.square} ${classes.even}`}></div>
                        <div id="d3" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="e3" className={`${classes.square} ${classes.even}`}></div>
                        <div id="f3" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="g3" className={`${classes.square} ${classes.even}`}></div>
                        <div id="h3" className={`${classes.square} ${classes.odd}`}></div>
                        <br />
                        <div id="a4" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="b4" className={`${classes.square} ${classes.even}`}></div>
                        <div id="c4" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="d4" className={`${classes.square} ${classes.even}`}></div>
                        <div id="e4" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="f4" className={`${classes.square} ${classes.even}`}></div>
                        <div id="g4" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="h4" className={`${classes.square} ${classes.even}`}></div>
                        <br />
                        <div id="a5" className={`${classes.square} ${classes.even}`}></div>
                        <div id="b5" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="c5" className={`${classes.square} ${classes.even}`}></div>
                        <div id="d5" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="e5" className={`${classes.square} ${classes.even}`}></div>
                        <div id="f5" className={`${classes.square} ${classes.odd}`}></div>
                        <div id="g5" className={`${classes.square} ${classes.even}`}></div>
                        <div id="h5" className={`${classes.square} ${classes.odd}`}></div>
                        <br />
                        <div
                            id="a6"
                            className={`${classes.square} ${classes.odd}`}
                            style={{ "text-shadow": "2px 2px 1px black" }}></div >
                        <div id="b6" className={`${classes.square} ${classes.even}`}></div>
                        <div
                            id="c6"
                            className={`${classes.square} ${classes.odd}`}
                            style={{ "text-shadow": "2px 2px 1px black" }}
                        ></div>
                        <div id="d6" className={`${classes.square} ${classes.even}`}></div>
                        <div
                            id="e6"
                            className={`${classes.square} ${classes.odd}`}
                            style={{ "text-shadow": "2px 2px 1px black" }}
                        ></div>
                        <div id="f6" className={`${classes.square} ${classes.even}`}></div>
                        <div
                            id="g6"
                            className={`${classes.square} ${classes.odd}`}
                            style={{ "text-shadow": "2px 2px 1px black" }}
                        ></div>
                        <div id="h6" className={`${classes.square} ${classes.even}`}></div>
                        <br />
                        <div id="a7" className={`${classes.square} ${classes.even}`}></div>
                        <div
                            id="b7"
                            className={`${classes.square} ${classes.odd}`}
                            style={{ "text-shadow": "2px 2px 1px black" }}
                        ></div>
                        <div id="c7" className={`${classes.square} ${classes.even}`}></div>
                        <div
                            id="d7"
                            className={`${classes.square} ${classes.odd}`}
                            style={{ "text-shadow": "2px 2px 1px black" }}
                        ></div>
                        <div id="e7" className={`${classes.square} ${classes.even}`}></div>
                        <div
                            id="f7"
                            className={`${classes.square} ${classes.odd}`}
                            style={{ "text-shadow": "2px 2px 1px black" }}
                        ></div>
                        <div id="g7" className={`${classes.square} ${classes.even}`}></div>
                        <div
                            id="h7"
                            className={`${classes.square} ${classes.odd}`}
                            style={{ "text-shadow": "2px 2px 1px black" }}
                        ></div>
                    </div >
                </Col >

                <Col id="" className={`${classes["user-card"]} ${classes["user-card-bg"]} col-md-3 mt-3 mb-3`}>
                    <div id="">
                        <div className={classes["card-block"]}>
                            <div className={classes["card-header"]}>
                                <h5 id="name" className="mt-2">Name</h5>
                                <h6 style={{ "color": "blue" }}>@userName</h6>
                            </div><br />
                            <div className={classes["user-image"]}>
                                <img
                                    src={profileImg}
                                    className={classes["img-radius"]}
                                    alt=""
                                />
                            </div>
                            <hr />
                            <div id="rt" className={`${classes.ratings} ml-2`}></div>

                            <p className={classes["text-dark"]}>WINNING/PLAYING: 1/5</p>

                            <button className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}>
                                <RxCrossCircled />
                                {/* <i className="far fa-times-circle"></i> */}
                            </button>&nbsp;&nbsp;&nbsp;

                            <button className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}>
                                <CiFlag1 />
                                {/* <i className={"far fa-flag"}></i> */}
                            </button>&nbsp;&nbsp;&nbsp;

                            <button className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}>
                                <BiPause />
                                {/* <i class="fas fa-pause"></i> */}
                            </button>&nbsp;&nbsp;&nbsp;

                            <button className={`${classes["text-muted"]} ${classes["rounded-circle"]}`}>
                                <BsChat />
                                {/* <i class="fa fa-comment-o"></i> */}
                            </button>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div style={{ "font-size": "25px" }} id="fb8" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="fb7" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="fb6" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="fb5" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="fb4" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="fb3" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="fb2" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="fb1" className="col-1 rest2"></div>
                        </div>
                        <div className="row">
                            <div style={{ "font-size": "25px" }} id="sb8" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="sb7" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="sb6" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="sb5" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="sb4" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="sb3" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="sb2" className="col-1 rest2"></div>
                            <div style={{ "font-size": "25px" }} id="sb1" className="col-1 rest2"></div>
                        </div>
                    </div>
                </Col>
            </Row >
        </Container >
    </>;
};

export default BoardPage;
