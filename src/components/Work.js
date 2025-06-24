import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Work.module.css';

const Work = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <div className={styles.workContainer}>
      <div
        className={`${styles.wrapper} ${
          shouldAnimate ? `${styles.animate}` : ''
        } ${styles.lightWrapper} `}
      ></div>
      {shouldAnimate ? (
        <div className={styles.workContent}>
          <div className={styles.navBar}>
            <a className={styles.homeLink} href='/'>
              HOME
            </a>
            <div className={styles.workLine}></div>
            <div className={styles.workCopywrightContainer}>
              <span className={styles.workCopywright}>©</span> 2025
            </div>
          </div>
          <div className={styles.workText}>
            <h1 className={styles.workHeader}>WORK</h1>
            <p className={styles.workParagraph}>
              Here is a collection of my best work in full-stack web
              development, including personal projects, freelance work, and web
              applications built for small businesses.
            </p>
          </div>
          <div className={styles.workLinks}>
            {/* <a
              href='https://besteaka.vercel.app/'
              className={styles.workListItem}
            >
              BE.STÉAK.Ă
            </a>
            <div className={styles.description}>- Restaurant Website</div>
            <a href='/' className={styles.workListItem}>
              ELOISA'S BBQ
            </a>
            <div className={styles.description}>- BBQ Business Website</div> */}
            <Link className={styles.workListItem} to='/project'>
              {' '}
              COLLABNOTE
            </Link>

            <div className={styles.description}>
              - A collaborative real-time text editor
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.initialContent}></div>
      )}
    </div>
  );
};

export default Work;
