import React, { useState } from 'react';
import './Contact.css';
import Title from '../Title/Title';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      service_id: 'service_39mugn6',
      template_id: 'template_c8fev6o',
      user_id: 'DdxZz5n4v4FZzy1NV',
      template_params: {
        'username': name,
        'user_email': email,
        'message': message,
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
      }
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Your mail is sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send email.');
      }
    } catch (error) {
      alert('Oops... ' + error.message);
    }
  };

  return (
    <div className='contact-form' id='/contact'>
      <div className='contact'>
        <Title title='Contact'/>
        <p>\\ Submit the form below or shoot me an email  
          <a href="mailto:ajibarebabajide1@gmail.com"> babajideajibare@gmail.com</a>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <p>
          <input 
            type="text"
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </p>
        <p>
          <input 
            type="email"
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <textarea
            name="message"
            rows='10'
            cols='30'
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea> 
        </p>
        <div className='btn'>
          <button type='submit'>Let's Collaborate &#8594;</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
