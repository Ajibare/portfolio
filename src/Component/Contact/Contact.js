import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
    }finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <div className='contact-form' id='/contact'>
      <div className='contact'>
      <h1 className='hire show'>Hire a remote Unicon Dev</h1>
      <h2 className='avaliable'>Available for select freelance opportunities</h2>
      <p className='help'>Got an exciting project? Reach out to me via email or contact me directly for instant messaging!</p>

        {/* <p className='mail'><a href="mailto:babajideajibare@gmail.com"> babajideajibare@gmail.com</a></p> */}
        <ul className='react-icon'>
          <li><a href="mailto:babajideajibare@gmail.com"><FaEnvelope size={35} color='#8892B0'/></a></li>
          <li><a href="https://www.linkedin.com/in/ajibare-babajide-94452a248/"><FaLinkedinIn size={35} color='#8892B0'/></a></li>
          <li><a href="https://x.com/SmartAbjob"><FaTwitter size={35} color='#8892B0'/></a></li>
          <li><a href="https://github.com/Ajibare"><FaGithub size={35} color='#8892B0'/></a></li>
        </ul>
        
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
        <button type='submit' disabled={isSubmitting}>
  {isSubmitting ? 'Sending...' : "Let's Collaborate →"}
</button>
          {/* <button type='submit'>Let's Collaborate &#8594;</button> */}
        </div>
      </form>
    </div>
    </>
  );
}

export default Contact;
