import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <br></br>
      <hr></hr>
      <br></br>
      <b><h2>Online shopping cart using c++ </h2></b>
        <h3>Developed a shopping cart system with other temmates by making use of OOP concept that allow user to add,remove and view items in shopping cart along with total.</h3>
        <br></br>
        <br></br>
        <b><h2>Property registration system using C</h2></b>
      <h3>Developed a property registration system by making use of c concept that will allow user to add property their user names, address and property value. And dsiplay all property data.</h3>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
