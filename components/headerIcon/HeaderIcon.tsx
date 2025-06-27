import * as styles from './HeaderIcon.css';
import Message from '@/public/icon/message.svg';
import Menu from '@/public/icon/menu.svg';
import X from '@/public/icon/x.svg';
import '@/features/home/category/Category';
import { RefObject } from 'react';

type Props = {
  icon: 'mail' | 'menu' | 'x';
  callback: () => void;
};

export const HeaderIcon = ({ icon, callback }: Props) => {
  const iconAdapter = () => {
    switch (icon) {
      case 'mail':
        return <Message className={styles.icon} />;
      case 'menu':
        return <Menu className={styles.icon} />;
      case 'x':
        return <X className={styles.iconX} />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    callback();
  };

  return (
    <button
      className={styles.menuBox}
      onClick={handleClick}
      popoverTarget={icon === 'menu' || icon === 'x' ? 'category' : undefined}
    >
      {iconAdapter()}
      <div className={styles.iconAnimation} />
    </button>
  );
};
