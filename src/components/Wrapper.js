import { useEffect, useState } from 'react';

import styles from './Wrapper.module.css';

const Wrapper = ({ color }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  console.log('shouldAnimate', shouldAnimate)
  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${
        shouldAnimate ? `${styles.animate}` : ''
      } ${
        color === 'light' ? styles.lightWrapper : styles.darkWrapper
      } `}></div>
  );
};

export default Wrapper;
