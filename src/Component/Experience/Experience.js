import React, { useState } from 'react';
import './Experience.css';
import {FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'; 

const experiences = [
  {
    title: 'Web Developer @ Omnific Works',
    period: 'Jan 2024 - Oct 2024',
    location: 'Ikere-Ekiti, Nigeria',
    website: 'weareomnific.com',
    description: 'Developed responsive and dynamic websites, optimized for performance and accessibility, while collaborating with cross-functional teams to deliver high-quality solutions.',
    skills: ['WordPress', 'Flutter SDK', 'Responsive Design', 'Bootstrap', 'Performance Optimization', 'Frontend Development'],
  },
  {
    title: 'Technical Instructor @ Omnific Works',
    period: 'Jun 2024 - Oct 2024',
    location: 'Ikere-Ekiti, Nigeria',
    website: 'weareomnific.com',
    description: 'Delivered engaging lessons on web development technologies, mentoring aspiring developers and ensuring hands-on proficiency in tools like HTML, CSS, JavaScript, and WordPress.',
    skills: ['Team Collaboration','HTML', 'CSS', 'Data Visualization Tools', 'Good Communication', 'Tech Savy'],

  },
  {
    title: 'Frontend Developer @ Cardily',
    period: 'Sept 2024 - Present',
    location: 'Remote',
    website: 'cardily-website-staging.onrender.com',
    description: 'Specialized in creating user-centric web applications using React.js and Next.js, enhancing user experiences through seamless UI designs.',
    skills: ['JavaScript', 'HTML', 'CSS', 'NextJs', 'Figma to Web Conversion', 'Redux'],

  },
  {
    title: 'Frontend Developer @ ZillState',
    period: 'Sept 2024 - Present',
    location: 'Remote',
    website: 'zillstate-zillstates-projects.vercel.app',
    description: 'Built interactive and scalable web components for real estate platforms, focusing on responsiveness, API integration, and React ecosystem optimization.',
    skills: ['JavaScript', 'HTML', 'CSS', 'React', 'Web3', 'Google APIs Integration', 'Figma to Web Conversion'],

  },
  {
    title: 'Web Developer @ Upwork Inc.',
    period: '2024 - Present',
    location: 'Remote',
    website: 'upwork.com',
    description: 'Provided freelance web development services, building custom solutions tailored to diverse client needs using React, WordPress, and modern frontend technologies.',
    skills: ['React', 'Next.js','JavaScript', 'WordPress', 'HTML', 'CSS', 'Tailwind CSS & Bootstrap','Figma to Web Conversion', 'SEO Optimization', 'Google APIs Integration']
    
,
  },
  {
    title: 'Web Developer @ Truelancer Inc.',
    period: '2024 - Present',
    location: 'Remote',
    website: 'truelancer.com',
    description: 'Delivered high-quality freelance web projects, including WordPress customization and React.js frontend development, meeting tight deadlines with precision.',
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
    <section className="experience" id='/experience'>
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
