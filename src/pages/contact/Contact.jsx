import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaGithub, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const[userName,setUserName]=useState('');
  const[userEmail,setUserEmail]=useState('');
  const[subject,setSubject]=useState('');
  const [message, setMessage] = useState('');


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
    'mongodb+srv://nitish002kr:4Uv2QyAOXXZ942rD@clustor0.ix6ml6f.mongodb.net/?retryWrites=true&w=majority&appName=clustor0', {
        method: "post",
        body: JSON.stringify({ userName, userEmail, subject, message }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    result = await result.json();

    if (result) {
        alert("Data saved succesfully");
        setUserEmail("");
        setUserName("");
        setSubject("")
        setMessage("");
    }
}



  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('Please fill out all the fields before submitting.');
      return;
    }

    emailjs
      .sendForm(
        "service_u1pc5pk",
        "template_d4a98ea",
        form.current,
        "3S6El_fa_yJbmjuj7"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Thank you! I will contact you as soon as possible.');
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    
    const formFields = form.current.querySelectorAll('.form__control');
    setUserName(e.target.value)
    setUserEmail(e.target.value)
    setSubject(e.target.value)
    setMessage(e.target.value)

    let isValid = true;
    formFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
      }
    });

    setIsFormValid(isValid);
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
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">nitish002kr@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91-931-579-7739</h4>
              </div>
            </div>
          </div>
          <div className="contact__social">
            <a href="https://github.com/nitish-09105/" target="blank" className="contact__social-link">
              <FaGithub />
            </a>
            <a href="https://twitter.com/Nitish69174675" target="blank" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="blank" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/in/nitish-kumar-a97b10203/" target="blank" className="contact__social-link">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Your Name' name='user_name' required className="form__control" onChange={handleInputChange } />
            </div>
            <div className="form__input-div">
              <input type="email" name='user_email' required placeholder='Your Email' className="form__control" onChange={handleInputChange} />
            </div>
            <div className="form__input-div">
              <input type="text" required placeholder='Your Subject' className="form__control" name="subject" onChange={handleInputChange} />
            </div>
          </div>
          <div className="form__input-div">
            <textarea placeholder='Your Message' className='form__control textarea' name="message" onChange={handleInputChange} />
          </div>
          <button className="button" type="submit" value='send' onClick={handleOnSubmit} disabled={!isFormValid}>
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
