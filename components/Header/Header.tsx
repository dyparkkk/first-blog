import * as styles from './Header.css';
import DyLogo from '@/public/logo.svg';
import MenuIcon from '@/public/menu.svg';
import Message from '@/public/message.svg';
import * as motion from 'motion/react-client';

const Header = () => {
  return (
    <header className={styles.container}>
      <motion.div
        className={styles.logo}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.7 }}
      >
        <DyLogo width={50} height={50} />
      </motion.div>

      <div className={styles.menuContainer}>
        <motion.div
          className={styles.menuBox}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.7 }}
        >
          <Message width={24} height={24} />
        </motion.div>
        <motion.div
          className={styles.menuBox}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.7 }}
        >
          <MenuIcon width={24} height={24} />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
