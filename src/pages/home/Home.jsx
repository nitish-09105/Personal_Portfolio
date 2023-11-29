import React from 'react'
import Profile from '../../assets/profile1.jpg'
import {Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import './Home.css';
const Home = () => {
  return (
    <section className="home sction grid">
      <img src={Profile} alt="" className="home__img" />
      <div className='home__content'>
        <div className="home__data">
          <h1 className='home__title'>
            <span>I'm Nitish Kumar.</span><br/>An Engineering Student
          </h1>
          <p className='home__description'>

I'm currently a student pursuing my BTech in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning. My primary objective is to successfully navigate through my coursework and leverage my knowledge to develop projects centered around machine learning. My passion lies in the realm of full-stack development, and I envision my future revolving around the exciting field of web development integrated with AI. If you have any guidance or insights to share on this journey, I'm eager to learn and explore further.
          </p>
          <Link to ='/about' className='button'>
            More About Me{' '} <span className='button__icon'><FaArrowRight/></span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
