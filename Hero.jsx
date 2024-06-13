import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> JAY WAIGANKAR</h1>

        <h1 className={styles.description}>
          I am 18 years old. I am pursuing my diploma in computer engineering in from vidyalankar polytechnic. determined third year computer enigineering student with passion for technology and a drive to learn and grow seeking opportunities to appy theoratical knowledge and skills in practical world where I can get contubuted to developed a professional.</h1> 
        <hr></hr>
      </div>
      <img
        src={getImageUrl("hero/hello.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
