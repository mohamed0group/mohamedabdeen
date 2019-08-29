import React, { Component } from 'react'
import { Card, CardDeck, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Git from "../../assets/img/25231.svg"
export class Home extends Component {
    render() {
        return (
            <div className="">
                <div className="courses">
                    <div className="dark-overlay">
                        <h2 className="h2-courses">Mohamed Abdeen</h2>
                        <p>Engament, Leads &amp; Conversions</p>
                    </div>
                </div>
                <CardDeck className="lead">
                    <Card ><i className="courses-block fas fa-cog"></i>
                        <CardBody>
                            <CardTitle className="p-courses">Personal Data</CardTitle>
                            <ListGroup>
                                <ListGroupItem action>Name: mohamed abdeen</ListGroupItem>
                                <ListGroupItem action>Birth: 1994/09/25</ListGroupItem>
                                <ListGroupItem action>Residence: Sudan</ListGroupItem>
                                <ListGroupItem action>Address: Sudan, Omdurman</ListGroupItem>
                                <ListGroupItem action>Email: mohamed0group@gmail.com</ListGroupItem>
                                <ListGroupItem action>website: mohamedabdeen.netlfy.com</ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                    <Card><i className="courses-block fas fa-laptop-code"></i>
                        <CardBody>
                            <CardTitle className="p-courses">Experience</CardTitle>
                            <CardText></CardText>
                            <ListGroup>
                                <ListGroupItem action>3+ Experience as freeLancer</ListGroupItem>
                            </ListGroup>
                            <CardTitle className="p-courses">Project</CardTitle>                            
                            <ListGroup>
                                <ListGroupItem action>Codolong</ListGroupItem>
                                <ListGroupItem action>Altra</ListGroupItem>
                                <ListGroupItem action>Project Planner</ListGroupItem>
                                <ListGroupItem action>Hot Delivery</ListGroupItem>
                                <ListGroupItem action>on<a href="https://github.com/mohamed0group"> <i><img src={Git} width="8%" role="githup"/></i></a> Githup</ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                    <Card><i className="courses-block fas fa-cog"></i>
                        <CardBody>
                            <CardTitle className="p-courses">Education</CardTitle>
                            <ListGroup>
                                <ListGroupItem action>BCS Engineer</ListGroupItem>
                                <ListGroupItem action>Udemy, web developer bootcamp</ListGroupItem>
                                <ListGroupItem action>Udemy, react.js</ListGroupItem>
                                <ListGroupItem action>Udemy, MARN-stack</ListGroupItem><hr/>
                                <Link to="resume"><ListGroupItem outline color="danger" action>View Resume</ListGroupItem></Link>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </CardDeck>
                <div className="parallax-courses-1">
                    <h2 className="h2-parallax">working with passion</h2>
                </div>
                <CardDeck className="lead">
                    <Card ><i className="courses-block fas fa-cog"></i>
                        <CardBody>
                            <CardTitle className="p-courses">Preview</CardTitle>
                            <CardText >
                                looking for bulding eCommerce site or web app,
                                will you'r with  the right hand.<br />
                                i'am mohamed abdeen full stack node.js developer
                                love to work with you & use the most updated  and trusted tools for your project.</CardText>
                        </CardBody>
                    </Card>
                    <Card><i className="courses-block fas fa-laptop-code"></i>
                        <CardBody>
                            <CardTitle className="p-courses">Software</CardTitle>
                            <CardText>produce all types of software development ranging from web pages and web applications.</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <div className="parallax-courses-2">
                    <h2 className="h2-parallax">haveing the best customer satisfaction</h2>
                </div>

            </div>
        )
    }
}

export default Home;