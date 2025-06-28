import { LoadMore } from './loadMore/LoadMore';
import * as styles from './index.css';
import { Article, ArticleDto } from '@/features/home/article/Article';

export const Main = () => {
  const articles: ArticleDto[] = [
    {
      category: 'Lifestyle',
      title: 'Animation과 scroll',
      date: '2025-01-23',
      body: `We celebrate the small yet profound experiences like a page from a
        calendar. Daily reflections with extraordinary events throughout the day
        — about lifestyle stories, moments and inspirations that remind us of
        what truly matters.`,
    },
    {
      category: '개발',
      title: 'React Hooks 와 렌더링',
      date: '2025-06-23',
      body: `리액트 훅에 대한 설명입니다....`,
    },
    {
      category: '개발',
      title: 'Scroll-driven-animation 적용하기',
      date: '2025-06-01',
      body: `이 페이지에 적용될 예정입니다. `,
    },
  ];

  return (
    <div className={styles.container}>
      <Article {...articles[0]} />
      <Article {...articles[1]} />
      <Article {...articles[2]} />
      <LoadMore />
    </div>
  );
};
