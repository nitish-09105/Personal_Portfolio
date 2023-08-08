import React, { useState ,useEffect, useRef} from 'react'
import './Contact.css'
import {FaEnvelopeOpen,FaPhoneSquareAlt,FaGithub,FaTwitter,FaYoutube,FaLinkedin,}from 'react-icons/fa'
import {FiSend} from 'react-icons/fi'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  useEffect(() => {
    if (showMessage) {
      alert('we will contact you soon...');
    }
  }, [showMessage]);



  const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7k7innh', 'template_1wrnhf6', form.current, 'pE9NeC-KaUjbWuTdG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
  return (
    <section className='contact section'>
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon"/>
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">nitish002kr@gmail.com</h4>
              </div>
            </div>
          <div className="info__item">
              <FaPhoneSquareAlt className="info__icon"/>

            <div>
            <span className="info__title">Call me</span>
            <h4 className="info__desc">+91-931-579-7739</h4>
            </div>
          </div>
          </div>

          <div className="contact__social">
            <a href="https://github.com" className="contact__social-link"> 
              <FaGithub/>
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter/>
            </a>
            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube/>
            </a>
            <a href="https://linkedin.com" className="contact__social-link">
              <FaLinkedin/>
            </a>
            </div>
        </div>

        <form className="contact__form" onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Your Name' name='user_name' 
              required className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="email" name='user_email' required placeholder='Your Email' className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="text" required placeholder='Your Subject' className="form__control" />
            </div>
        </div>

        <div className="form__input-div">
              <textarea placeholder='Your Message' className='form__control textarea' ></textarea>
          </div>

          <button onClick={handleClick} className="button" >
          
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact;