import classes from "./faq.module.css";
import { Container, Row, Col } from "reactstrap";
import { FcFaq } from "react-icons/fc";
import whiteknightleftImage from "../../assets/whiteknightleft.png";

const Faq = () => {
  return (
    <>
      <div className={`${classes.ruleBody} container`}>
        <h1 className={classes.title}>
          Frequently Asked Questions <FcFaq></FcFaq>
        </h1>
        <h6 className={classes.metadata}>
          Everything you need to know about to Chess Game and website. Can't find <br /> the answer you are looking for?
          Please contact us{" "}
        </h6>
        <u className={classes.here}>Here</u>.
        <Container className={`mt-5 ${classes.container}`}>
          <section>
            <Row>
              <Col className="md-4">
                <h6 className="mb-6">A simple question?</h6>
                <p>
                  <strong>
                    <u>Absolutely!</u>
                  </strong>{" "}
                  We work with top payment companies which guarantees your safety and security. All billing information
                  is stored on our payment processing partner.
                </p>
              </Col>
              <Col md="6" lg="4" className="mb-4">
                <h6 className="mb-3">A question that is longer then the previous one?</h6>
                <p>
                  <strong>
                    <u>Yes, it is possible!</u>
                  </strong>{" "}
                  You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will
                  not be charged next month.
                </p>
              </Col>
              <Col md="6" lg="4" className="mb-4">
                <h6 className="mb-3">A simple question?</h6>
                <p>
                  Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any
                  time with no further obligation.
                </p>
              </Col>
              <Col md="6" lg="4" className="mb-4">
                <h6 className="mb-3">A simple question?</h6>
                <p>Yes. Go to the billing section of your dashboard and update your payment information.</p>
              </Col>
              <Col md="6" lg="4" className="mb-4">
                <h6 className="mb-3">A simple question?</h6>
                <p>
                  <strong>
                    <u>Unfortunately no</u>.
                  </strong>{" "}
                  We do not issue full or partial refunds for any reason.
                </p>
              </Col>
              <Col md="6" lg="4" className="mb-4">
                <h6 className="mb-3">Another question that is longer than usual</h6>
                <p>Of course! We’re happy to offer a free plan to anyone who wants to try our service.</p>
              </Col>
            </Row>
          </section>
        </Container>
        <div className={classes.footer}>
          <img className={classes.footerImg} src={whiteknightleftImage} />
          <h6 className={classes.footerQuestion}> Still Have any Questions? </h6>
          <p>Can't find the answer you're looking for? Please contact us to our friendly team.</p>
          <button className={`${classes.contactBtn}`}>ContactUs</button>
        </div>
      </div>
    </>
  );
};

export default Faq;
