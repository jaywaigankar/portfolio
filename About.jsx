import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <br></br>
      <hr></hr>
      <br></br>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <b><h2>Skills</h2></b>
              <h3>java, c++, basic html, computer graphics using C.</h3>
           <br></br>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
             <b><h2>Career goals</h2></b> 
              
               <h3>To become a good full stack developer.</h3> 
              <br></br>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
             <b><h2>Education</h2></b> 
              
               <h3>I have done my schooling from Dr Antonio Da silva technical high school.</h3> 
              
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
