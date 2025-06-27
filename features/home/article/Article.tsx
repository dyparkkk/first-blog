import { Divider } from '@/components/divider/Divider';
import * as styles from './Article.css';
import { Name } from '@/components/name/Name';
import { Circle } from '@/components/name/Circle';

export const Article = () => {
  return (
    <div className={styles.articleContainer}>
      {/*=================== article header==================== */}
      <a className={styles.category} href="">
        Lifestyle
      </a>
      <a className={styles.title} href="">
        Animation과 scroll
      </a>
      <div className={styles.metaData}>
        <Name />
        <Circle />
        <p className={styles.date}>Posted on January 23, 2025</p>
      </div>

      {/*  ==============article body================== */}
      <p className={styles.body}>
        We celebrate the small yet profound experiences like a page from a
        calendar. Daily reflections with extraordinary events throughout the day
        — about lifestyle stories, moments and inspirations that remind us of
        what truly matters.
      </p>

      <a href="">
        <p className={styles.more}>더보기</p>
        <div className={styles.moreAnimation}></div>
      </a>

      <Divider />
    </div>
  );
};
