'use client';

import * as styles from './Footer.css';
import Arrow from '/public/icon/angle_left.svg';

export const BackToTopButton = () => {
  const handleClick = () => {
    console.log('handleClick');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.buttonBox}>
      <button className={styles.backToTopButton} onClick={handleClick}>
        <Arrow className={styles.arrow} />
      </button>
    </div>
  );
};
