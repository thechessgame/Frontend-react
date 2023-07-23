import classes from "./contactusform.module.css";
import { Container, Row, Col, Form } from "reactstrap";
import FormGroup from "./FormGroup";

const ContactUsForm = () => {
  return (
    <>
      <Form className={classes["contact-form"]}>
        <FormGroup labelName="Your Name:" name="fname" placeholder="Enter your name" />
        <FormGroup labelName="Email:" name="email" placeholder="Enter email" />
        <FormGroup labelName="Comment:" name="comment" placeholder="Ask your query..." />
        <FormGroup name="button" />
      </Form>
    </>
  );
};

export default ContactUsForm;
