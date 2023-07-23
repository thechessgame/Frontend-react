import classes from "./Contactus.module.css";
import { Container, Row, Col } from "reactstrap";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <Container className={classes["contact"]}>
        <Row>
          <Col xs="3" className={classes["col-md-3"]}>
            <div className={classes["contact-info"]}>
              <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="." />
              <h2>Contact Us</h2>
              <h4>We would love to hear from you !</h4>
            </div>
          </Col>
          <Col xs="9" className={classes["col-md-9"]}>
            <ContactUsForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
