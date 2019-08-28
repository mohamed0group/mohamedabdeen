import React, { Component } from 'react';

export class Contact extends Component {
    render() {
        return (
            <div className="lead jumbotron">
                <h1 className="lg-heading">
                    Contact
            <span className="text-secondary">Me</span>
                </h1>
                <h2 className="sm-heading">This is how you can reach me...</h2>
                <div className="boxes">
                    <div>
                        <span className="text-secondary">Email: </span><a href="mailto:mohamed0group@gmail.com">mohamed0group@gmail.com</a>
                    </div>
                    <div>
                        <span className="text-secondary"> Phone: </span> <a href="tel:+249915775147">+249915775147</a>
                    </div>
                    <div>
                        <span className="text-secondary"> </span><address>Address: Omdurman - Salha - Block 6</address>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
