import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About/index';
import Projects from '../Preject/index';
import Contact from '../Contact/index';
// import Resume from '../Resume';

function Portfolio() {
    // state of current page 
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        // switch statement that will return the appropriate component of the 'currentPage'
        switch(currentPage) {
          case "about": 
          return <About></About>
          case "contact": 
          return <Contact></Contact>
          case "portfolio":
          return  <Projects></Projects>
          // case "resume": 
          // return <Resume></Resume>
          default:
            return <About></About>
        }
       
    };

return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;