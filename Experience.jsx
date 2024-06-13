import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <br></br>
      <hr></hr>
      <br></br>
      <h2 classname={styles.title}>As I am a collage student I have worked in many group project of a particular subjects. i have participated in intercollage micro project competiation. And in may other group activities.</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          
        </div>
        
      </div>
    </section>
  );
};
