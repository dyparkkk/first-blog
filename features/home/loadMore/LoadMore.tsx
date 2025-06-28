import * as styles from './LoadMore.css';

export const LoadMore = () => {
  return (
    <div className={styles.loadMoreBox}>
      <button className={styles.button}>
        <p className={styles.buttonText}>Load More</p>
      </button>
    </div>
  );
};
