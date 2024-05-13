// import React from 'react';
// import {personalInfo} from '../data';
// const Info = () => {
//   return (
//     <>
//     {personalInfo.map(({title,description},index)=>{
//       return(
//         <li className="info__item" key={index}>
//           <span className="info__title">{title}</span>
//           <span className="info__description">{description}</span>
//         </li>
//       );
//     })}
//     </>
//   );
// };

import React from 'react';
import { personalInfo } from '../data';

const Info = () => {
  return (
    <>
      {personalInfo.map(({title, description, url },index) => (
        <li className="info-item" key={index}>
          <span className="info-title">{title}</span>
          {/* If there is a URL, render it as a link */}
          {url ? (
            <span><a href={url} target="_blank" rel="noopener noreferrer" className="info-description">
              {description}
            </a></span>
          ) : (
            <span className="info-description">{description}</span>
          )}
        </li>
      ))}
    </>
  );
};

export default Info;
