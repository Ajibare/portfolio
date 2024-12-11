import React from 'react';
import './Expertise.css';
import software from '../../Asset/software.png'
import react from '../../Asset/react-e00184ba.png'
import cover from '../../Asset/background (1).png'
import wordpress from '../../Asset/wordpress.png'
const Expertise = () => {
  const expertiseItems = [
    {
      title: 'WordPress Wizardry',
      description: 'Building user-friendly, responsive WordPress sites with sleek designs and custom features.',
      icon: wordpress,
      code : '<h2>',
      seccode : '</h2>',
    },
    {
      title: 'Frontend Dev\nReact, NextJS',
      description: 'UI/UX Specialist: Crafting intuitive, visually captivating interfaces with HTML, CSS, JS, React and Next.js frameworks.',
      icon: react,
      code : '<h2>',
      seccode : '</h2>',
    },
    {
      title: 'Software Development',
      description: 'Building reliable, scalable, and user-focused software tailored to meet diverse business needs.',
      icon: software,
      code : '<h2>',
      seccode : '</h2>',
    },

    // {
    //   title: 'Responsive Design Pro',
    //   description: 'Creating adaptable designs for flawless performance across all devices and screen sizes.',
    //   icon: react,
    //   code : '<h2>',
    //   seccode : '</h2>',
    // },
  ];

  return (
    <>
    <section className="expertise" id='/expertise'>
      <h1 className='expertise_h1'>My Expertise</h1>
      <div className="expertise-grid">
        {expertiseItems.map((item, index) => (
          <div className="expertise-card" key={index}>
           <div className="expertise_title">
              <div className="icon_title">
                  <img src={item.icon} alt="" />
                </div>
                <h3>{item.title}</h3>
           </div>
           <div className="down_column">
            <div className='code_expert'>
              <p>{item.code}</p>
              <p className='line'></p>
              <p>{item.seccode}</p>
            </div>
            <p className='decsription'>{item.description}</p>
           </div>
           
           
          </div>
        ))}
      </div>
      <div className="underlay">
        <img src={cover} alt="recent code" />
      </div>
    </section>
    </>
  );
};

export default Expertise;
