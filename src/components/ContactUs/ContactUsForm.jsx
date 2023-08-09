import classes from "./contactusform.module.css";
import FormGroup from "./FormGroup";
import { Form } from "react-router-dom";

const ContactUsForm = () => {
  return (
    <>
      <Form method="post" className={classes["contact-form"]}>
        <FormGroup labelName="Your Name:" name="fname" placeholder="Enter your name" />
        <FormGroup labelName="Email:" name="email" placeholder="Enter email" />
        <FormGroup labelName="Comment:" name="comment" placeholder="Ask your query..." />
        <FormGroup name="button" />
      </Form>
    </>
  );
};

export default ContactUsForm;
