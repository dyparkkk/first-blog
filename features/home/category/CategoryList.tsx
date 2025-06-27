import * as styles from './Category.css';

export const CategoryList = () => {
  return (
    <div className={styles.categorySection}>
      <p className={styles.categoryTitle}>카테고리</p>
      <div className={styles.categoryList}>
        <a href="/" className={styles.categoryItem}>
          <p>개발</p>
        </a>
        <a href="/" className={styles.categoryItem}>
          <p>독서</p>
        </a>
      </div>
    </div>
  );
};
