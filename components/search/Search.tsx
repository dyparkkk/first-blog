import Form from 'next/form';
import * as styles from './Search.css';
import Arrow from '@/public/icon/angle_left.svg';
import SearchIcon from '@/public/icon/search.svg';

export const Search = () => {
  return (
    <div className={styles.container}>
      <Form action="/search" className={styles.form}>
        <input
          type="text"
          name="q"
          placeholder="Search posts..."
          className={styles.input}
        />
        <button className={styles.button}>
          <Arrow className={styles.arrow} />
        </button>
      </Form>
      <div className={styles.iconBox}>
        <SearchIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};
