import React, { Component } from 'react';
import { CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import ACE from "../../assets/img/skills/mongodb.png"
class MongoDBCard extends Component {
  render() {
    return (
      <div >
        <CardImg width="100%" src={ACE} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </div>
    );
  }
}

export default MongoDBCard;