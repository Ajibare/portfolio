import React from 'react';
import './Work.css';
import Title from '../Title/Title';
import work from '../../Asset/work.jpg';

const Work = () => {
  const details = [
    { 
      id: 1, 
      image: work, 
      liveLink: "https://example1.com", 
      codeLink: "https://github.com/Ajibare/Evt.git" ,
      title: "landing page for optimization event registration"
    },
    { 
      id: 2, 
      image: work, 
      liveLink: "https://github.com/Ajibare/demo.git", 
      codeLink: "https://github.com/Ajibare/demo.git" ,
       title: "online storedfront development"
    },
    { 
      id: 3, 
      image: work, 
      liveLink: "https://github.com/Ajibare/school.git", 
      codeLink: "https://github.com/Ajibare/school.git",
      title: "GISG School Website" 
    },
    { 
      id: 4, 
      image: work, 
      liveLink: "https://example4.com", 
      codeLink: "https://github.com/Ajibare/venturebeat.git" ,
       title: "Clone Page : VentureBeat "
    },
    { 
      id: 5, 
      image: work, 
      liveLink: "https://probability-calculator-five.vercel.app/", 
      codeLink: "https://github.com/Ajibare/probability_calculator.git",
      title: "Advance probability Calculator" 
    },
    { 
      id: 6, 
      image: work, 
      liveLink: "https://example6.com", 
      codeLink: "https://github.com/Ajibare/project6.git",
      title: "landing page for an event site" 
    }
  ];

  return (
    <>
      <Title title="Work" />
      <div className="grid-container" id='/work'>
        {details.map(({ id, image, liveLink, codeLink, title}) => (
          <div key={id} className="grid-item">
            <img
              src={image}
              alt="work"
              className="preview-image"
            />
            <div className="popup-container">
            <h2 className='live-title'>{title}</h2>
              {/* <div className="live-view">
                <a href={liveLink} target="_blank" rel="noopener noreferrer">View</a>
              </div> */}
              <div className="code-view">
                <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Work;
