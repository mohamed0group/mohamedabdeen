import React, { Component } from 'react';
import Res from "../../assets/resume.pdf"
export class Resume extends Component {
    render() {
        return (
            <object data={Res} width="100%" height="750"/>
        );
    }
}

export default Resume;
