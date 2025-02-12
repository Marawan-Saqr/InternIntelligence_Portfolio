import "./Experince.css";
import ProjectCard from './Project-card/ProjectCard.jsx';
import { projectsData } from '../../Data.js';
import { useState } from 'react';

const Experince = () => {

  const [projects] = useState(projectsData);

  return (
    <div className="experince" id="experience">
      <h2 className="text-center">Experince</h2>
      {projects.length >= 1 ? (
        projects.map((project, index) => (
          <ProjectCard key={index} project={ project } index={index} />
        ))
      ) : (
        <h4 className="text-center mt-5 mb-5">No Projects For Now</h4>
      )}
    </div>
  );
};

export default Experince;