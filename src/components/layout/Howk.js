import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';
import Idea from "../../assets/img/howk/idea.jpg";
import Design from "../../assets/img/howk/design.jpg";
import Devolop from "../../assets/img/howk/devolop.jpg";
import Concept from "../../assets/img/howk/concept.jpg";
import Testing from "../../assets/img/howk/testing.jpg";
import Lunch from "../../assets/img/howk/lunching.jpg";
const Howk = (props) => {
    return (
        <div className="howk">
                <Card>
                    <CardImg top width="100%" src={Idea} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={Concept} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            <hr />
                <Card>
                    <CardImg top width="100%" src={Design} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={Devolop} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            <hr />
                <Card>
                    <CardImg top width="100%" src={Testing} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={Lunch} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
        </div>
    );
};

export default Howk;