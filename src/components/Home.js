import { useEffect, useState } from 'react';

import styles from './Home.module.css';

const Home = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div
        className={`${styles.homeWrapper} ${
          shouldAnimate ? `${styles.animate}` : ''
        }`}></div>
      <div className={styles.homeContent}>
        <div className={styles.socialBar}>
          <a
            href="https://www.github.com/chabadilla92"
            className={styles.socialItem}>
            GH
          </a>
          <a
            href="https://www.linkedin.com/in/christopher-abadilla"
            className={styles.socialItem}>
            LI
          </a>
          <div className={styles.line}></div>
          <div className={styles.socialItem}>
            <span className={styles.copywright}>©</span> 2023
          </div>
        </div>
        <div className={styles.homeText}>
          <h1 className={styles.homeHeader}>CHRIS ABADILLA</h1>
          <p className={styles.homeParagraph}>
            Web Developer & Frontend Engineer.{' '}
          </p>
          <p className={styles.homeParagraph}>
            Currently working full-time as a Frontend Developer at Senior Sign.
          </p>
        </div>
        <div className={styles.homeNav}>
          <a href="/work" className={styles.navListItem}>
            WORK
          </a>
          <a href="/about" className={styles.navListItem}>
            ABOUT
          </a>
          <a href="/contact" className={styles.navListItem}>
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
