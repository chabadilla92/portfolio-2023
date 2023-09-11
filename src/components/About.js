import { useState, useEffect } from 'react';

import styles from './About.module.css';

const About = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <div
        className={`${styles.wrapper} ${
          shouldAnimate ? `${styles.animate}` : ''
        } ${styles.lightWrapper} `}></div>
      {shouldAnimate ? (
        <div className={styles.aboutContent}>
          <div className={styles.navBar}>
            <a className={styles.homeLink} href="/">
              HOME
            </a>
            <div className={styles.aboutLine}></div>
            <div className={styles.aboutCopywrightContainer}>
              <span className={styles.aboutCopywright}>©</span> 2023
            </div>
          </div>
          <div className={styles.aboutText}>
            <h1 className={styles.aboutHeader}>ABOUT</h1>
            <p className={styles.aboutParagraph}>
              My name is Chris. I'm a frontend developer and web designer. I
              started coding about 3 years ago and am currently working
              full-time for a small start-up in Utah.
            </p>
            <p className={styles.aboutParagraph}>
              In between my day job and weekend side hustles, I work as a
              freelance web designer. Previously from a hospitality background,
              I have worked with many local businesses in the bay area,
              specializing in creating and designing web applications for many
              up and coming restaurants and bars.
            </p>
            <h2 className={styles.aboutSubHeader}>SKILLS</h2>
            <p className={styles.aboutParagraph}>
              UI/UX Design / HTML & CSS / JavaScript / TypeScript / Node.js /
              Google Firebase / Strapi / React/Redux
            </p>
            <div className={styles.resumeContainer}>
              {' '}
              <a href="/" className={styles.resume}>
                RESUME
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.initialContent}></div>
      )}
    </div>
  );
};

export default About;
