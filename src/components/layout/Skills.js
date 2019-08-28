import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ReactImg from "../../assets/img/skills/react.png"
import PassportImg from "../../assets/img/skills/passportJS-300x300.png"
import NodeImg from "../../assets/img/skills/nodejs.svg"
import MongoImg from "../../assets/img/skills/mongodb.png"
import JsImg from "../../assets/img/skills/js.png"
import HtmlImg from "../../assets/img/skills/html.png"
import ExpImg from "../../assets/img/skills/express.png"
import CssImg from "../../assets/img/skills/css.png"

class Skills extends Component {
    render() {
        return (
            <div Id="projects">
                <div className="skills">
                    <div className="dark-overlay">
                        <h2 className="h2-skills">Mern-Stack Devoloper</h2>
                    </div>
                </div>
                <div className="lead jumbotron">
                <h1 class="h1 col-md-4 col-sm-12">Front-End</h1>
                <Row >
                    <Col md="3" sm="6"><img src={HtmlImg} className="img-fluid" alt="html"/></Col>
                    <Col md="3" sm="6"><img src={CssImg} className="img-fluid" alt="css"/></Col>
                    <Col md="3" sm="6"><img src={JsImg} className="img-fluid" alt="js"/></Col>
                    <Col md="3" sm="6"><img src={ReactImg} className="img-fluid" alt="react"/></Col>
                </Row><hr/>
                <h1 className="h1 col-md-3 col-sm-12" >Back-End</h1>
                <Row>
                    <Col md="3" sm="6"><img src={NodeImg} className="img-fluid rounded-circle" alt="nodejs"/></Col>
                    <Col md="3" sm="6"><img src={ExpImg} className="img-fluid rounded-circle" alt="express"/></Col>
                    <Col md="3" sm="6"><img src={MongoImg} className="img-fluid " alt="mongo"/></Col>
                    <Col md="3" sm="6"><img src={PassportImg} width="250" className="img-fluid" alt="passport"/></Col>
                </Row>
                </div>
            </div>
        )
    }
}

export default Skills;