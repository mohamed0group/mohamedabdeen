import React, { Component } from 'react'
import P1 from "../../assets/img/projects/project1/project-report-95.png";
import P2 from "../../assets/img/projects/project1/2.png";
import P6 from "../../assets/img/projects/project2/p2-2.png";
import P7 from "../../assets/img/projects/project2/p2-3.jpg";
import { Jumbotron, Row, Col } from "reactstrap";
class Project extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                <h1 className="lg-heading">My
                    <span className="text-secondary">Work</span>
                </h1>
                <h2 className="sm-heading">
                    Check out some of my projects...
                </h2><hr/>
                    <Row>
                        <Col>
                            <div className="item">
                                <a href="#!">
                                    <img src={P1} alt="Project" width="100%" />
                                </a>
                                <div className="btn-group btn-toolbar mb-3" role="group">
                                    <a href="https://proplanner.netlify.com" className="btn-light btn">
                                        <i className="fas fa-eye"></i> Project Planner
                            </a>
                                    <a href="https://github.com/mohamed0group/project-planner" class="btn-dark btn">
                                        <i className="fab fa-github"></i> Github
                            </a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                        <p className="display-1 lead text-center pros"> Project Planner</p>
                        </Col>
                    </Row><hr/>
                    <Row>
                        <Col>
                        <p className="display-1 lead text-center pros">Codolong</p>                        
                        </Col>
                        <Col>
                            <div className="item">
                                <a href="#!">
                                    <img src={P2} alt="Project" width="100%" />
                                </a>
                                <div className="btn-group btn-toolbar mb-3" role="group">
                                    <a href="https://codolong.herokuapp.com" className="btn-light btn">
                                        <i className="fas fa-eye"></i> Codolong
                            </a>
                                    <a href="https://github.com/mohamed0group/codolong" class="btn-dark btn">
                                        <i className="fab fa-github"></i> Github
                            </a>
                                </div>
                            </div>
                        </Col>
                    </Row><hr/>
                    <Row>
                        <Col>
                            <div className="item">
                                <a href="#!">
                                    <img src={P6} alt="Project" width="100%" />
                                </a>
                                <div className="btn-group btn-toolbar mb-3" role="group">
                                    <a href="https://altras.herokuapp.com" className="btn-light btn">
                                        <i className="fas fa-eye"></i> Altra
                            </a>
                                    <a href="https://github.com/mohamed0group/altras" class="btn-dark btn">
                                        <i className="fab fa-github"></i> Github
                            </a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                        <p className="display-1 lead text-center pros">Altra</p>                        
                        </Col>
                    </Row><hr/>
                    <Row>
                        <Col>
                        <p className="display-1 lead text-center pros">Hot Delivrey</p>
                        </Col>
                        <Col>
                            <div className="item">
                                <a href="#!">
                                    <img src={P7} alt="Project" width="100%" />
                                </a>
                                <div className="btn-group btn-toolbar mb-3" role="group">
                                    <a href="/#" className="btn-light btn">
                                        <i className="fas fa-eye"></i> Hot Delivrey
                            </a>
                                    <a href="/#" class="btn-dark btn">
                                        <i className="fab fa-github"></i> Github
                            </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>



            </div>
        )
    }
}

export default Project;