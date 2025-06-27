import * as styles from './Body.css';
import { Article } from '@/features/home/article/Article';

export const Body = () => {
  return (
    <div className={styles.container}>
      <Article />
    </div>
  );
};
