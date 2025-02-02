import React, { useContext } from "react";
import Wave from 'react-wavify';
import Card from "../../Components/Card1/Card";
import { Context } from "../../Context/context";
import "./Projects.css";

const Projects = () => {
  const { projects } = useContext(Context);

  return (
    <div className="projects-page" id="projects-page">
      <h1>Projects</h1>

      <div className="projects">
        <div className="projects-cont">
          {projects.map((item, i) => {
            return (
              <Card
                title={item.title}
                img={item.image}
                tech={item.techUsed}
                desc={item.desc}
                githubLink={item.githubLink}
                netlifyLink={item.netlifyLink}
                techStack={item.techStack}
              />
            );
          })}
        </div>
      </div>
      
      <Wave fill='rgb(15, 15, 51)'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 80,
          amplitude: 20,
          speed: 0.25,
          points: 4
        }}
  />
    </div>
  );
};

export default Projects;
