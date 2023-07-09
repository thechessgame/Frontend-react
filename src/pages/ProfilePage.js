import classes from './profile.module.css';
import { Container, Row, Col, Button } from 'reactstrap';
import profileImg from "../assets/profile.png";

const ProfilePage = () => {
  return <>
    <Container
      id="renderProfile"
      className="tab-pane fade show active d-flex justify-content-center"
    >
      <div className={`${classes["emp-profile"]} ${classes["pb-0"]}`}>
        <form method="post">
          <Row >
            <Col md="4">
              <div className={classes["profile-img"]}>
                <img
                  id={classes.profileImg}
                  className={classes["rounded-lg"]}
                  src={profileImg}
                  alt="profile"
                />
              </div>
            </Col>
            <Col md="6">
              <div className="Experience">
                <h3 className="heading-font">Vivek kumar singh</h3>
                <p className="normal-font">Join us on ${new Date().toLocaleDateString('en-IN')},${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} </p>
                <p className="bold-font">Winning/Playing : <span>4/5</span></p>
                <p className="bold-font">Rating : <span>4/5</span></p>
              </div>
            </Col>
            <Col md="2">
              <button className={`${classes.Btn}`}>ContactUs</button>
            </Col>
            <Col className="modal fade" id="edit-profile" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <input id="editImage" name="editImage" type="file" className="file mt-3 ml-3" data-show-preview="false" /><br />
                  <div className="modal-footer">
                    <button id="saveImage" type="submit" data-dismiss="modal">Save Image</button>
                    <button id="deleteImg" type="submit" data-dismiss="modal">Delete Image</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row >
            <h3 className="border-bottom heading-font">About</h3>
            <Row >
              <Col md="4">
                <label className="bold-font">User Id</label>
              </Col>
              <Col md="8" >
                <p style={{ "color": "blue", "text-shadow": "1px 1px 5px white" }} className="detail-font ">@mst</p>
              </Col>
            </Row>
            <Row >
              <Col md="4" >
                <label className="bold-font">Name <a id="editName" href="#" className="btn rounded-pill btn-dark btn-sm edit" data-toggle="modal" data-target="#editnamemodal">Edit</a></label>
              </Col>
              <Col md="8" >
                <p className="detail-font">Vivek kumar singh</p>
              </Col>
            </Row>
            <Row >
              <Col md="4">
                <label className="bold-font">Email <a id="editEmail" href="#" className="btn rounded-pill btn-dark btn-sm edit" data-toggle="modal" data-target="#editemailmodal">Edit</a></label>
              </Col>
              <Col md="8">
                <p className="detail-font">vivek@gmail.com</p>
              </Col>
            </Row>
            <Row >
              <Col md="4">
                <label className="bold-font">Contact No. <a id="editContact" href="#" className="btn rounded-pill btn-dark btn-sm edit" data-toggle="modal" data-target="#editcontactmodal">Edit</a></label>
              </Col>
              <Col md="8">
                <p className="detail-font">6387653616</p>
              </Col>
            </Row>
          </Row>
        </form>
      </div >
    </Container >
  </>;
};

export default ProfilePage;
