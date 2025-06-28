import { Circle } from '../name/Circle';
import * as styles from './Footer.css';

export const Contact = () => {
  return (
    <>
      <div className={styles.contactBox}>
        <a href="">
          <p className={styles.contactText}>Instagram</p>
          <div className={styles.contactTextAnimation}></div>
        </a>
        <Circle />
      </div>
    </>
  );
};
