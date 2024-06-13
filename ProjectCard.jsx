import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>

      
      <ul className={styles.skills}>
      
      
      </ul>
      <div className={styles.links}>
        
        
      </div>
    </div>
  );
};
