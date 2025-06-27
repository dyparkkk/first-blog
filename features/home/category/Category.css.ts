import { flex } from '@/styles/flex.css';
import { theme } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const category = style([
  flex({ direction: 'column', justify: 'start', align: 'start' }),
  {
    borderRadius: 12,
    boxShadow: '1px 0px 0px rgba(0,0,0,0.2)',
    padding: '40px 32px',
    width: 420,
    height: 'auto',
    gap: 12,
    background:
      'linear-gradient(0deg, rgb(17, 17, 17) 0%, rgb(51, 51, 51) 100%)',
    marginTop: 30,

    transformOrigin: 'top center',
    transition:
      'opacity 0.5s ease, transform 0.5s ease, overlay 0.5s allow-discrete, display 0.5s allow-discrete', // overlay, display 제어 필요.

    // https://github.com/vanilla-extract-css/vanilla-extract/issues/1521
    // @starting-style 설정이 필요하나 vanilla-extract 에서 지원하지 않아 css로 설정. @/styles/popover.css 참고

    '@media': {
      'screen and (max-width: 1140px)': {
        margin: '20px 0px',
        maxWidth: 'calc(100% - 80px)',
      },
      'screen and (max-width: 840px)': {
        flex: 'none',
        height: 'calc(100% - 100px)',
        margin: '40px 10px 10px 10px',
        width: 'calc(100% - 20px)',
        maxWidth: 'calc(100% - 20px)',
      },
    },
  },
]);

globalStyle(`#category`, {
  // @ts-ignore - 실험적 CSS 속성
  'position-anchor': '--category',
  'position-area': 'bottom span-left',
});

export const categorySection = style([
  flex({ direction: 'column', justify: 'start', align: 'start' }),
  {
    gap: 12,
    width: '100%',
  },
]);

export const categoryTitle = style({
  color: theme.colors.white[65],
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.9,
  textAlign: 'left',
  width: 'auto',
});

export const categoryList = style([
  flex({ direction: 'column', justify: 'start', align: 'start' }),
  {
    flexWrap: 'wrap',
    gap: 14,
  },
]);

export const categoryItem = style({
  padding: '4px 0',
  background: 'transparent',
  textDecoration: 'none',

  ':hover': {
    opacity: 0.8,
  },
});

globalStyle(`${categoryItem} > p`, {
  color: theme.colors.white[100],
  fontSize: 28,
  fontWeight: 700,
  lineHeight: 1.2,
  textAlign: 'left',
});

export const selfInfo = style([
  flex({ direction: 'column', justify: 'start', align: 'start' }),
  {
    gap: 16,
    width: '100%',
  },
]);

export const nameBox = style([
  flex({ direction: 'row', justify: 'start', align: 'center' }),
  {
    gap: '6px 12px',
  },
]);

export const selfInfoText = style({
  color: theme.colors.white[65],
  lineHeight: 1.9,
  textAlign: 'left',
});
