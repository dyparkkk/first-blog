import { style } from '@vanilla-extract/css';
import { flex } from '@/styles/flex.css';
import { lineClamp } from '@/styles/text.css';
import { theme } from '@/styles/theme.css';

export const articleContainer = style([
  flex({ direction: 'column', justify: 'center', align: 'start' }),
  {
    gap: 32,
    margin: 0,
    padding: '0px 100px',
    '@media': {
      'screen and (max-width: 1140px)': {
        padding: '0px 60px',
      },
      'screen and (max-width: 840px)': {
        padding: '0px 40px',
      },
    },
  },
]);

export const category = style({
  color: theme.colors.text[65],
  lineHeight: 1.9,
  textAlign: 'left',
  width: 'auto',
});

export const title = style([
  lineClamp({ line: 2 }),
  {
    color: theme.colors.text[100],
    fontSize: 46,
    fontWeight: 900,
    letterSpacing: '0.01em',
    lineHeight: 1.3,
  },
]);

export const metaData = style([
  flex({ direction: 'row', justify: 'start', align: 'center' }),
  {
    gap: '6px 12px',
  },
]);

export const date = style({
  color: theme.colors.text[65],
  lineHeight: 1.4,
});

export const body = style({
  color: theme.colors.text[65],
  lineHeight: 1.9,
});

export const more = style({});

export const moreAnimation = style({
  width: '100%',
  height: '2px',
  transform: 'scaleX(0)',
  transformOrigin: 'center left',
  transition: 'transform 0.4s cubic-bezier(0.4, 0.4, 0, 1)',
  background: theme.colors.text[100],
  selectors: {
    [`${more}:hover + &`]: {
      transform: 'scaleX(1)',
    },
    [`${more}:not(:hover) + &`]: {
      transform: 'scaleX(0)',
    },
  },
});
