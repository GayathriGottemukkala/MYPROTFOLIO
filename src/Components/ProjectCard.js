import React from 'react';

const ProjectCard = ({ title, text,img,link }) => {
  return (
    <div className="card">
         <a href={link} target="_blank" rel="noopener noreferrer">
         <img src={img} alt={title} style={{width:"97%"}}/>
         </a>
   
    </div>
  );
};

export default ProjectCard;
