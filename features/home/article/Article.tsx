import { Divider } from '@/components/divider/Divider';
import * as styles from './Article.css';
import { Name } from '@/components/name/Name';
import { Circle } from '@/components/name/Circle';

export type ArticleDto = {
  category: string;
  title: string;
  date: string;
  body: string;
};

export const Article = (props: ArticleDto) => {
  const { category, title, date, body } = props;

  return (
    <div className={styles.articleContainer}>
      {/*=================== article header==================== */}
      <a className={styles.category} href="">
        {category}
      </a>
      <a className={styles.title} href="">
        {title}
      </a>
      <div className={styles.metaData}>
        <Name />
        <Circle />
        <p className={styles.date}>Posted on {date}</p>
      </div>

      {/*  ==============article body================== */}
      <p className={styles.body}>{body}</p>

      <a href="">
        <p className={styles.more}>더보기</p>
        <div className={styles.moreAnimation}></div>
      </a>

      <Divider />
    </div>
  );
};
