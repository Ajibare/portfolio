import React, { useState } from 'react';
import './Experience.css';
import {FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'; 

const experiences = [
  {
    title: 'Web Developer @ Omnific Works',
    period: 'Jan 2024 - Oct 2024',
    location: 'Ikere-Ekiti, Nigeria',
    website: 'weareomnific.com',
    description: 'Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.',
    skills: ['WordPress', 'Flutter SDK', 'Responsive Design', 'Bootstrap', 'Performance Optimization', 'Frontend Development'],
  },
  {
    title: 'Technical Instructor @ Omnific Works',
    period: 'Jun 2024 - Oct 2024',
    location: 'Ikere-Ekiti, Nigeria',
    website: 'weareomnific.com',
    description: 'Worked on dynamic marketing dashboards and internal tools.',
    skills: ['Team Collaboration','HTML', 'CSS', 'Data Visualization Tools', 'Good Communication', 'Tech Savy'],

  },
  {
    title: 'Frontend Developer @ Cardily',
    period: 'Sept 2024 - Present',
    location: 'Remote',
    website: 'cardily-website-staging.onrender.com',
    description: 'Worked on dynamic marketing dashboards and internal tools.',
    skills: ['JavaScript', 'HTML', 'CSS', 'NextJs', 'Figma to Web Conversion', 'Redux'],

  },
  {
    title: 'Frontend Developer @ ZillState',
    period: 'Sept 2024 - Present',
    location: 'Remote',
    website: 'zillstate-zillstates-projects.vercel.app',
    description: 'Worked on dynamic marketing dashboards and internal tools.',
    skills: ['JavaScript', 'HTML', 'CSS', 'React', 'Web3', 'Google APIs Integration', 'Figma to Web Conversion'],

  },
  {
    title: 'Web Developer @ Upwork Inc.',
    period: '2024 - Present',
    location: 'Remote',
    website: 'upwork.com',
    description: 'Delivered full-stack solutions for global clients.',
    skills: ['React', 'Next.js','JavaScript', 'WordPress', 'HTML', 'CSS', 'Tailwind CSS & Bootstrap','Figma to Web Conversion', 'SEO Optimization', 'Google APIs Integration']
    
,
  },
  {
    title: 'Web Developer @ Truelancer Inc.',
    period: '2024 - Present',
    location: 'Remote',
    website: 'truelancer.com',
    description: 'Delivered full-stack solutions for global clients.',
    skills:  ['React', 'Next.js','JavaScript', 'WordPress', 'HTML', 'CSS', 'Tailwind CSS & Bootstrap','Figma to Web Conversion', 'SEO Optimization', 'Google APIs Integration']
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleExpand = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <section className="experience">
      <h1>Professional Experience</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header" onClick={() => toggleExpand(index)}>
            <div className="experience_title">
            {experience.title}
            </div>
           <div className='experience_period'>
              <div className="period">{experience.period}</div>
              <div className="toggle-icon">{activeIndex === index ? '−' : '+'}</div>
           </div>
          </div>
          {activeIndex === index && (
            <div className="experience-content">
              <div className='experience_dropdown'>
              {experience.location && (
                <p>
                  <FaMapMarkerAlt style={{ color: '#ff7300', fontSize: '16px'}}/> {experience.location}
                </p>
              )}
              {experience.website && (
                <p>
                  <a href={`https://${experience.website}`} target="_blank" rel="noopener noreferrer">
                  <FaGlobe style={{ marginRight: '8px', color: '#ff7300' }} />{experience.website} 
                  </a>
                </p>
              )}
              </div>
              <p className='experience_description'>{experience.description}</p>
              <div className="myskills">
                {experience.skills.map((skill, i) => (
                  <button key={i} className="skill-badge">
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  </>
  );
};

export default Experience;
