import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Nitish',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Kumar',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '19 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Ghaziabad U.P.',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91-9315797739',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'nitish002kr@gmail.com',
  },

  {
    id: 9,
    title: 'LinkedIn : ',
    description: 'nitish-kumar-a97b10203',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Hindi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: 'UG',
    title: '4rd Year<br /> Btech CSE(AI&ML)',
  },

  {
    id: 2,
    no: '7+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '2+',
    title: 'Experience<br />',
  },

  {
    id: 4,
    no: '5+',
    title: ' participated  in <br />Hackathons & others',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Nov 2022 - PRESENT',
    title: 'Chegg Expert <span> Chegg India </span>',
    desc: 'Working as a freelance, solving problems regarding Coding, Academics, Competitive, etc.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'June 2022 - July 2022',
    title: 'Web Development And Designing Intern <span> Oasis Infobyte </span>',
    desc: 'Online Internship Powered by MSME. Worked on Front End Develoment and Completed tasks under the deadline.',
  },



  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Bachelor Of Technology<span>Abes Engineering College Ghaziabad</span>',
    desc: 'Currently studying in 4th year and my branch is Computer Scince And Engineering (AI & ML)',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'Intermediate<span> DHRT Saraswati Vidya Mandir Ghaziabad </span>',
    desc: 'Scored 76.2% in PCM Stream.',
  },


];

export const skills = [
  {
    id: 1,
    title: 'C',
    percentage: '60',
  },

  {
    id: 2,
    title: 'C++',
    percentage: '60',
  },

  {
    id: 3,
    title: 'Java',
    percentage: '40',
  },

  {
    id: 4,
    title: 'Python',
    percentage: '65',
  },

  {
    id: 5,
    title: 'Javascript',
    percentage: '60',
  },

  {
    id: 6,
    title: 'ReactJS',
    percentage: '60',
  },

  {
    id: 7,
    title: 'Web Development',
    percentage: '60',
  },

  {
    id: 8,
    title: 'Machine Learning',
    percentage: '40',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Music Player App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebApp',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs, Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'nitish-09105/Music-Player',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Eye Color, Bald And Child Detection',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebApp',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python, ML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'nitish-09105/Eye-color-bald-and-child-detection',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Face Recognition System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python,Opencv',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'N/A',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Calculator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebApp',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Internship',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'nitish-09105/Calculator',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Real Estate Price Prediction',
    details: [
      {
        title: 'Project : ',
        desc: 'Development',
      },
      {
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        title: 'Language : ',
        desc: 'Python, ML',
      },
      {
        title: 'Preview : ',
        desc: 'nitish-09105/Real-Estate-price-prediction',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'ToDo List',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Page',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'nitish-09105/Todo-list',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
