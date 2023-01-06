import React from 'react'; 

import myImage from '../Assets/Images/Portfolio-Pic.jpg';


function About() {
    return(
      <>
        <h1 className="about-me">
          If you want to know me better
        </h1>
           <section className="about-me-section">
        <img src={myImage} className="my-image" alt="mohammadreza-profile"/>
      <div className="about-me-card"> 
        <div className="content">
     
            <h3 class="full-name card-header">
              Mohammad Memar
            </h3>
            <h4 className='card-header'>
              Full stack web developer
            </h4>
        <p>
          I am a web developer passionate about creating meaningful and high quality applications using modern technologies. Recently earned a certificate in Full Stack Web Development from
        </p>
        </div>
      </div>
      </section>
      </>
  

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