import { animations } from '@/styles/animations.css';
import { flex } from '@/styles/flex.css';
import { gradients, theme } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style([
  flex({ direction: 'row', justify: 'center', align: 'center' }),
  {
    background: gradients.background.footer,
    height: 270,
    width: '100%',
    flexShrink: 0,
    position: 'relative',
  },
]);

export const mainSection = style([
  flex({ direction: 'column', justify: 'center', align: 'start' }),
  {
    gap: 4,
    width: 980,
    margin: '0 60px',
    padding: '0 100px',

    '@media': {
      'screen and (max-width: 1140px)': {
        width: 'calc(100% - 80px)',
        margin: '0 40px',
        padding: '0 60px',
      },
      'screen and (max-width: 840px)': {
        width: 'calc(100% - 40px)',
        margin: '0 20px',
        padding: '0 40px',
      },
      'screen and (max-width: 540px)': {
        padding: '0 10px',
      },
    },
  },
]);

export const contactBox = style([
  flex({ direction: 'row', justify: 'start', align: 'center' }),
  {
    gap: 12,
  },
]);

globalStyle(`${contactBox} > a`, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const contactText = style({
  color: theme.colors.text[65],
  lineHeight: 1.4,
  cursor: 'pointer',
  transition: 'color 0.4s ease',

  ':hover': {
    color: theme.colors.text[100],
  },
});

export const contactTextAnimation = style([
  animations.scaleX(theme.colors.text[100], contactText),
]);

export const rightText = style({
  color: theme.colors.text[50],
  width: 'auto',
});

export const buttonBox = style([
  flex({
    direction: 'row',
    justify: 'center',
    align: 'center',
    position: 'absolute',
  }),
  {
    right: 0,
    padding: '0 60px',
  },
]);

export const backToTopButton = style([
  flex({ justify: 'center', align: 'center' }),
  {
    background: theme.colors.boarder[100],
    border: 'none',
    borderRadius: '50%',
    height: 32,
    width: 32,
    transition: 'background 0.6s ease, scale 0.6s ease',

    ':hover': {
      background: theme.colors.primary,
      scale: 1.1,
    },
  },
]);

export const arrow = style({
  width: 18,
  height: 18,
  transform: 'rotate(90deg)',
  fill: theme.colors.white[100],
});
