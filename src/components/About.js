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
        } ${styles.lightWrapper} `}
      ></div>
      {shouldAnimate ? (
        <div className={styles.aboutContent}>
          <div className={styles.navBar}>
            <a className={styles.homeLink} href='/'>
              HOME
            </a>
            <div className={styles.aboutLine}></div>
            <div className={styles.aboutCopywrightContainer}>
              <span className={styles.aboutCopywright}>©</span> 2025
            </div>
          </div>
          <div className={styles.aboutText}>
            <h1 className={styles.aboutHeader}>ABOUT</h1>
            <p className={styles.aboutParagraph}>My name is Chris.</p>
            <p className={styles.aboutParagraph}>
              I'm a software engineer with over 4 years of experience building
              scalable products for early-stage startups.
            </p>
            <h2 className={styles.aboutSubHeader}>SKILLS</h2>
            <p className={styles.aboutParagraph}>
              UI/UX Design / HTML & CSS / JavaScript / TypeScript / Node.js /
              Google Firebase / Strapi / React/Redux / Supabase / NextJS
            </p>
            <div className={styles.resumeContainer}>
              {' '}
              <a href='/' className={styles.resume}>
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
