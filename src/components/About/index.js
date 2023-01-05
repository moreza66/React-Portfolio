import React from 'react'; 
// import images from assets
import myImage from '../Assets/Images/IMG_2029.jpg';

// import { Col } from 'react-bootstrap';


function About() {
    return(
      <section className="about-me-section">
        <img src={myImage} className="my-image" alt="mohammadreza-profile"/>
      <div className="about-me-card"> 
        <div className="content">
        <h3 class="name">Mohammad Memar</h3>
        <h4 class="job">Full stack web developer</h4>
        <p>
          I am a web developer passionate about creating meaningful and high quality applications using modern technologies. Recently earned a certificate in Full Stack Web Development from
        </p>
        </div>
      </div>
      </section>

    // <section className="title">
      
    //   <div className="row justify-content-center" id="about-container">       
    //   <Col lg={6} md={12}>
    //   <center><img src={myImage} className="my-image" alt="nicole-profile"/></center>
    //   <p class="name">Mohammad Memar</p>
    //   <p class="job">Full stack web developer</p>
    //   <h2 class="education">a little about me</h2>
    //     <p>
    //      I am a web developer passionate about creating meaningful
		// 			and high quality applications using modern technologies.
		// 			Recently earned a certificate in Full Stack Web Development
		// 			from the{' '}
    //     <br></br>
  
    //     <br></br>
    //      </p>
    //   </Col>

    //   </div>
    // </section> 
)}
  
export default About;