import { useState, useEffect } from 'react';
import Wrapper from './Wrapper';

import styles from './Contact.module.css';

const Contact = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <div className={styles.contactContainer}>
      <div
        className={`${styles.wrapper} ${
          shouldAnimate ? `${styles.animate}` : ''
        } ${styles.lightWrapper} `}></div>
      {shouldAnimate ? (
        <div className={styles.contactContent}>
          <div className={styles.navBar}>
            <a className={styles.homeLink} href="/">
              HOME
            </a>
            <div className={styles.contactLine}></div>
            <div className={styles.contactCopywrightContainer}>
              <span className={styles.contactCopywright}>©</span> 2023
            </div>
          </div>
          <div className={styles.contactText}>
            <h1 className={styles.contactHeader}>Hello.</h1>
            <p className={styles.contactParagraph}>
              Need a beautiful website that you can own and maintain yourself ?
              Please contact me!{' '}
            </p>
            <p className={styles.contactParagraph}>
              Email:{' '}
              <span className={styles.underline}>chabadilla92@gmail.com</span>
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.initialContent}></div>
      )}
    </div>
  );
};

export default Contact;
