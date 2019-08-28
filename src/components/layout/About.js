import React, { Component } from 'react';
import Mabdeen from "../../assets/img/mabdeen.png";
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, CardDeck, Row
} from 'reactstrap';
import Idea from "../../assets/img/howk/idea.png";
import Design from "../../assets/img/howk/design.jpg";
import Devolop from "../../assets/img/howk/devolop.jpg";
import Concept from "../../assets/img/howk/concept.jpg";
import Testing from "../../assets/img/howk/testing.jpg";
import Lunch from "../../assets/img/howk/lunching.jpg";
class About extends Component {
    render() {
        return (
            <div>
                <div className="lead jumbotron">
                    <h1 className="lg-heading">About<span className="text-secondary">Me</span></h1>
                    <h2 className="sm-heading">Let me tell you a few things...</h2>
                    <div className="about-info">
                        <img src={Mabdeen} alt="mabdeen" className="bio-image" />
                        <div className="bio">
                            <h3 className="text-secondary">
                                BIO</h3>
                            <p className="lead">my name is mohamed abdeen i live in sudan, omdurman.<br />i love working with computer and developing web app,i'm in web 16h/7d and like working with team.<br />
                                i'm Speacileist in node.js programing and all javascript libery.<br /> my goal it's helping custmore and influencing for better Oppratonaties</p>
                        </div>
                    </div>
                    <div className="text-center">
                    <h2 className="sm-heading">Work Process</h2>
                        <CardDeck>
                        <Card>
                                <CardImg top className="img-fluid" src={Idea} alt="Card image cap" />
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle className="display-1 pros">Idea</CardTitle>
                                </CardBody>
                            </Card>
                        </CardDeck><hr/>
                        <CardDeck>                        
                            <Card>
                                <CardBody>
                                    <CardTitle className="display-1 pros">Concept</CardTitle>
                                </CardBody>
                            </Card>                        
                            <Card>
                                <CardImg top className="img-fluid" src={Concept} alt="Card image cap" />
                            </Card>
                        </CardDeck><hr/>
                        <CardDeck>
                            <Card>
                                <CardImg top className="img-fluid" src={Design} alt="Card image cap" />
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle className="display-1 pross">Design</CardTitle>
                                </CardBody>
                            </Card>
                        </CardDeck><hr/>
                        <CardDeck>                        
                            <Card>
                                <CardBody>
                                    <CardTitle className="display-1 pross">Devolop</CardTitle>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg top className="img-fluid" src={Devolop} alt="Card image cap" />
                            </Card>
                        </CardDeck><hr/>
                        <CardDeck>
                            <Card>
                                <CardImg top className="img-fluid" src={Testing} alt="Card image cap" />
                            </Card>
                            <Card>
                                <CardBody >
                                    <CardTitle className="display-1 pross">Testing</CardTitle>
                                </CardBody>
                            </Card>
                        </CardDeck><hr/>
                        <CardDeck>                        
                            <Card>
                                <CardBody >
                                    <CardTitle className="howk display-1 pros">Lunching</CardTitle>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg top className="img-fluid" src={Lunch} alt="Card image cap" />
                            </Card>
                        </CardDeck>
                        </div>
                </div>
            </div>
        );
    }
}

export default About;
