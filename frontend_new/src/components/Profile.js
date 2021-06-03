import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Row, Container, Col, Badge } from "react-bootstrap";
import ReactJson from "react-json-view";
const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left" style={{ paddingTop: '2em'}} >
        <Col md={2}>
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
          <Badge variant="warning">{"UCSB Affiliate"}</Badge>
        </Col>
      </Row>
      <hr style={{ color: '#18335d', backgroundColor: '#18335d', height: '5px' }} />
      <Row className="text-left" style={{ display: 'inline-block', paddingLeft:'15px' }}>
        <div className="profile-info-container">
          <p>Full Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      </Row>
    </Container>
  );
};

export default Profile;
