import Form from 'next/form';
import * as styles from './Search.css';
import Right from '@/public/icon/right_angle.svg';
import { BiSearch, BiChevronRight } from 'react-icons/bi';

export const Search = () => {
  return (
    <>
      <Form action="/search" className={styles.form}>
        <input
          type="text"
          name="q"
          placeholder="Search posts..."
          className={styles.input}
        />
        <button className={styles.button}>
          <BiChevronRight className={styles.arrowIcon} />
        </button>
      </Form>
      <div className={styles.iconBox}>
        <BiSearch />
      </div>
    </>
  );
};
