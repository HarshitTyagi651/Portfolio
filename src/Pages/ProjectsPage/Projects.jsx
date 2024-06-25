import React, { useContext } from "react";
import Card from "../../Components/Card1/Card";
import { Context } from "../../Context/context";
import "./Projects.css";

const Projects = () => {
    const {projects} = useContext(Context)
  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-top">
          <div className="projects-left">
            <p>{`{ Recent Projects }`}</p>
          </div>
          <div className="projects-right">
            <p>My services perform exactly that functions that are needed. To create interfaces that are easy to learn and master for the clients and users.</p>
          </div>
        </div>
        <div className="projects">
            {
                projects.map((item, i) => {
                    return(
                        <Card title={item.title} img={item.image} tech={item.techUsed} link={item.link}/>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Projects;
