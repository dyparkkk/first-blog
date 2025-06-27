import * as styles from './Header.css';
import { HeaderIcon } from '@/components/headerIcon/HeaderIcon';
import { Logo } from '@/components/logo/Logo';
import { Search } from '@/components/search/Search';
import { Category } from '@/features/home/category/Category';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [onMenu, setOnMenu] = useState(false);

  const handleMenuClick = () => {
    setOnMenu(!onMenu);
  };

  const handleMailClick = () => {
    alert('no implement');
  };

  const handleToggle = (toggle: boolean) => {
    console.log('handleToggle', toggle);
    if (toggle) setOnMenu(true);
    else setOnMenu(false);
  };

  return (
    <header className={styles.container}>
      <Logo />
      <div className={styles.menuContainer}>
        {onMenu ? null : (
          <>
            <Search />
            <HeaderIcon icon={'mail'} callback={handleMailClick} />
          </>
        )}
        <HeaderIcon icon={onMenu ? 'x' : 'menu'} callback={handleMenuClick} />
      </div>
      <Category onToggle={handleToggle} />
    </header>
  );
};

export default Header;
