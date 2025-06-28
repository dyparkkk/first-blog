import { Circle } from '@/components/name/Circle';
import * as styles from './Footer.css';
import Arrow from '/public/icon/angle_left.svg';
import { BackToTopButton } from './BackToTopButton';
import { Copyright } from './Copyright';
import { Contact } from './Contact';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.mainSection}>
        <Contact />
        <Copyright />
      </div>

      <BackToTopButton />
    </footer>
  );
};
