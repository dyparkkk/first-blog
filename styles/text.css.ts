import { recipe } from '@vanilla-extract/recipes';

export const multiline = recipe({
  base: {
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
});

export const truncate = recipe({
  base: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

/**
 * IE는 지원하지 않습니다.
 * WebkitBoxOrient 속성은 Deprecated 이지만, 대체 속성이 없어 다중 라인 '...' 구현을 위해 적용합니다.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient
 */
export const lineClamp = recipe({
  base: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 1,
    textOverflow: 'ellipsis',
  },
  variants: {
    line: {
      1: {
        WebkitLineClamp: 1,
      },
      2: {
        WebkitLineClamp: 2,
      },
      3: {
        WebkitLineClamp: 3,
      },
      4: {
        WebkitLineClamp: 4,
      },
      5: {
        WebkitLineClamp: 5,
      },
      6: {
        WebkitLineClamp: 6,
      },
    },
  },
});
