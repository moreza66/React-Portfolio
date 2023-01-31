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
     
            <h3 className="full-name card-header">
              Mohammad Memar
            </h3>
            <h4 className='card-header'>
              Full stack web developer
            </h4>
        <p>
        Passionate, detail-oriented Full Stack Web Developer student at Rice University coding Boot-camp and a degree in Bio Medical Engineering. Highly enthusiastic about coding and learning new materials. Prepared to excel under stressful situations and maintain a sense of humor while collaborating with a team in a productive, positive manner across fast-paced settings.
        </p>
        </div>
      </div>
      </section>
      </>
)}
  
export default About;