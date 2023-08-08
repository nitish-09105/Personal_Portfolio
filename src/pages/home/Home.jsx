import React from 'react'
import Profile from '../../assets/profile.jpg'
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
          I am a student of BTech computer science and engineering (Artificial Intelligence And Machine Learning). Being a student this is my target to fulfill my course and implement the whole knowledge to create the projects that are based on machine learning. usually interested in full-stack development and continuing my future according to my dream which is web development with ai.
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
