import React from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'
import {AiOutlineFilePdf} from 'react-icons/ai'
import { Row, Col } from 'react-bootstrap'; 
import Resume from '../../components/Assets/Resume/Mohammadreza-Resume.pdf'

function ContactPage() {

return (
    <section>
        <h1 className="contact">contact me</h1>

        <div className="contact-icons">
        <Row>
            <Col lg={3} md={12}>
            <a href="https://github.com/moreza66">
                <h3> <BsGithub size={70}/> </h3>
            </a>
            <p class="icon-text">github</p>
            </Col>
            
            <Col lg={3} md={12}>
            <a href="https://www.linkedin.com/in/mohammad-reza-memar-653132149/">
            <h3> <BsLinkedin size={70}/> </h3>
            </a>
            <p class="icon-text">linkedin</p>
            </Col>

            <Col lg={3} md={12}>
            <a href="mailto:moreza.memar@gmail.com">
            <h3> <MdAlternateEmail size={70}/> </h3>
            </a>
            <p class="icon-text">email</p>
            </Col>
            
            <Col lg={3} md={12}>
            <a href={Resume} download><h3> <AiOutlineFilePdf size={70}/> </h3>
            </a>
            <p class="icon-text">resume</p>
            </Col>
        </Row>
        </div>

        <div class="skills-container">
            <Row>
                <Col lg={6} md={12}>
                <h2 class="resume">font-end technologies</h2>
                <ul>
                    <li> HTML </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        React.js
                    </li>
                    <li>
                        Framework (Bootstrap, Bulma)
                    </li>
                    <li>
                        Responsive Web Design
                    </li>
                </ul>
                </Col>
        
            <Col lg={6} md={12}>
            <h2 class="resume">back-end technologies</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL (mysql2)
                    </li>
                    <li>
                        NoSQL (MongoDB, Mongoose)
                    </li>
                    <li>
                        API's (web, third-party, RESTful, server-side)
                    </li>
                    <li>
                        Templating language (Handlebars)
                    </li>
                </ul>
            </Col>
        </Row>
        </div>

    </section>
    );
}
    
export default ContactPage;

