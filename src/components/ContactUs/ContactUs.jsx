import classes from "./contactus.module.css";
import { Container, Row, Col } from "reactstrap";
import ContactUsForm from "./ContactUsForm";
import { useNavigation, useActionData } from "react-router-dom";
import LoadingSpinner from "../Loader/LoadingSpinner.jsx";
import { ToastContainer } from "react-toastify";
import { showErrorMessage, showSuccessMessage } from "../../util/toast";
import { useEffect } from "react";

const ContactUs = () => {
  let navigation = useNavigation();
  let isSubmitting = navigation.state === "submitting";
  let response = useActionData();

  useEffect(() => {
    if (response && !response.error) {
      showSuccessMessage(response.msg);
    } else if (response && response.error) {
      showErrorMessage(response.msg);
    }
  }, [response]);

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
            {isSubmitting ? <LoadingSpinner isLoading={true} /> : <ContactUsForm />}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
};

export default ContactUs;
