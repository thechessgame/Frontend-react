import classes from './Contactus.module.css';
import { Container, Row, Col } from 'reactstrap';

const ContactusPage = () => {
    return <>
        <Container className={classes["contact"]} >
            <Row >
                <Col xs="3" className={classes["col-md-3"]}>
                    <div className={classes["contact-info"]} >
                        <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="." />
                        <h2>Contact Us</h2>
                        <h4>We would love to hear from you !</h4>
                    </div>
                </Col>
                <Col xs="9" className={classes["col-md-9"]}>
                    <div className={classes["contact-form"]}>
                        <div className={classes["form-group"]}>
                            <label htmlFor="fname"
                            >Your Name:<sup style={{ "color": "red" }}>*</sup></label
                            >
                            <div className="">
                                <input
                                    type="text"
                                    className={classes["form-control"]}
                                    id="fname"
                                    placeholder="Enter your name"
                                    name="fname"
                                />
                            </div>
                        </div>
                        <div className={classes["form-group"]}>
                            <label htmlFor="email">Email:<sup style={{ "color": "red" }}>*</sup></label>
                            <div className="">
                                <input
                                    type="email"
                                    className={classes["form-control"]}
                                    id="email"
                                    placeholder="Enter email"
                                    name="email"
                                />
                            </div>
                        </div>
                        <div className={classes["form-group"]}>
                            <label htmlFor="comment"
                            >Comment:<sup style={{ "color": "red" }}>*</sup></label
                            >
                            <div className="">
                                <textarea
                                    className={classes["form-control"]}
                                    rows="5"
                                    id="comment"
                                    placeholder="Ask your query..."
                                ></textarea>
                            </div>
                        </div>
                        <div className={classes["form-group"]}>
                            <div className="">
                                <button id={classes.submitBtn} type="submit" className="btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    </>;
};

export default ContactusPage;
