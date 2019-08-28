import React from 'react';
import {
  Card, CardImg, CardDeck, CardBody, ListGroup, ListGroupItem
} from 'reactstrap';
import Logo from "../../assets/img/favicon.png";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardBody className="text-center ">
          <ListGroup>
          </ListGroup>
          <Link to="/skills">
            <ListGroupItem outline color="danger" action>Skills</ListGroupItem>
          </Link><hr />
          <Link to="/contact">
            <ListGroupItem outline color="warning" action>Contact</ListGroupItem>
          </Link><hr />
          <Link to="/project">
            <ListGroupItem outline color="info" action>Project</ListGroupItem>
          </Link>
        </CardBody>
      </Card>
      <Card >
        <CardBody className="text-center ">
          <CardImg src={Logo} alt="logo" className="footImg" />
          <h3 id="co" className="h1" >Copyright&copy; 2019 ACE Space&trade; </h3>
        </CardBody>
      </Card>
      <Card >
        <CardBody className="text-center ">
          <ListGroup>
            <ListGroupItem className="display-4" action>Hoppy</ListGroupItem>
            <ListGroupItem color="danger" action>BskitBall</ListGroupItem>
            <ListGroupItem color="warning" action>Chess</ListGroupItem>
            <ListGroupItem color="info" action>Car</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Footer;
