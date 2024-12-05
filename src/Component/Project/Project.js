import React from 'react'; 
import {FaGlobe} from 'react-icons/fa'; 
import './Project.css';
import zillstate from '../../Asset/Zillstate.png'
import Arena from  '../../Asset/Arena.png'
import excefort from '../../Asset/Excefort.png'
import eatrs from '../../Asset/eatrs.png'
import talent from '../../Asset/talent.png'
import Cardily from '../../Asset/Cardily.png'

const Project = () => {
  const projects = [
    { id: '1', url: 'https://talenttower-lbu8.onrender.com', title: 'Talent Tower', description: 'Description for project 1', img: talent },
    { id: '5', url: 'https://zillstate-zillstates-projects.vercel.app/', title: 'ZillState', description: 'Ongoing Project', img: zillstate },
    { id: '2', url: 'https://eatrightsociety.org/', title: 'Eat Right Society', description: 'Description for project 2', img: eatrs },
    { id: '3', url: 'https://jesusarena.org/', title: 'Jesus Arena', description: 'Description for project 3', img:Arena },
    { id: '4', url: 'https://excefort.com/', title: 'Excefort', description: 'Description for project 4', img: excefort},
    { id: '6', url: '', title: 'Cardily', description: 'Ongoing Project', img: Cardily },
  ];

  return (
    <>
    <div className="mywork">
     <div className='mywork_content'>
        <h1>My Work</h1>
        <p>I’m a Frontend and WordPress developer with expertise in React, Next.js, and API integration. I specialize in building responsive, user-friendly websites and thrive under tight deadlines to deliver quality work.</p>
     </div>
     <div class="animicontainer">
      <img src={zillstate} alt='zillstate'/>
      <img src={Arena} alt='arena'/>
      <img src={excefort} alt='excefort'/>
      <img src={talent} alt='talent'/>
      </div>
     

    </div>
    <div className="project-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image" style={{ backgroundImage: `url(${project.img})` }}></div>
          <div className="project-content">
            <h3>{project.title} <a href={project.url} target="_blank"  rel="noopener noreferrer"><FaGlobe style={{ marginRight: '8px', color: '#ff7300' }}/></a></h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Project;
