import { style } from '@vanilla-extract/css';
import { flex } from '@/styles/flex.css';
import { lineClamp } from '@/styles/text.css';
import { theme } from '@/styles/theme.css';
import { animations } from '@/styles/animations.css';

export const articleContainer = style([
  flex({ direction: 'column', justify: 'center', align: 'start' }),
  {
    width: '100%',
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

export const more = style({
  lineHeight: 1.4,
});

export const moreAnimation = style([
  animations.scaleX(theme.colors.text[100], more),
]);
