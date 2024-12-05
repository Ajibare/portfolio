import React from 'react';
import './Expertise.css';
import react from '../../Asset/react-e00184ba.png'
import cover from '../../Asset/background (1).png'
const Expertise = () => {
  const expertiseItems = [
    {
      title: 'Software Development',
      description: 'Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.',
      icon: react,
      code : '<h2>',
      seccode : '</h2>',
    },
    {
      title: 'Frontend Dev\nReact, NextJS',
      description: 'Passionate about UI/UX. Over 5 years of experience in HTML, CSS, JS, React, and NextJS frameworks.',
      icon: react,
      code : '<h2>',
      seccode : '</h2>',
    },
    {
      title: 'Flutter Dev\nAndroid, iOS',
      description: 'Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.',
      icon: react,
      code : '<h2>',
      seccode : '</h2>',
    },
  ];

  return (
    <>
    <section className="expertise">
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
