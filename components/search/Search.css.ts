import { style } from '@vanilla-extract/css';
import { flex } from '@/styles/flex.css';
import { theme, gradients } from '@/styles/theme.css';

export const container = style([
  flex({ direction: 'row', justify: 'start', align: 'center' }),
  {
    // position: 'relative',

    '@media': {
      'screen and (max-width: 840px)': {
        display: 'none',
      },
    },
  },
]);

export const form = style([
  flex({ direction: 'row', align: 'center', justify: 'center' }),
  {
    border: `1px solid ${theme.colors.boarder[4]}`,
    borderRadius: 30,
    width: 'auto',
    maxWidth: '100%',
    height: '52px',
    background: gradients.background.light(),
  },
]);

export const input = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: '1rem',
  background: 'transparent',
  padding: '10px 16px 10px 60px',
  color: theme.colors.text[100],
});

export const button = style([
  flex({ direction: 'row', justify: 'center', align: 'center' }),
  {
    border: `1px solid ${theme.colors.boarder[8]}`,
    borderRadius: 50,
    boxShadow: 'none',
    lineHeight: 1.4,
    fontSize: 15,
    width: 44,
    height: 44,
    justifyContent: 'center',
    margin: '0px 4px 0px 0px',
    zIndex: 2,
    background: gradients.background.vertical(),
    cursor: 'pointer',
    transition: 'background 0.4s ease',

    ':hover': {
      background: gradients.background.vertical(0.08),
    },
  },
]);

export const arrow = style({
  width: 22,
  height: 'auto',
  transform: 'rotate(180deg)',
});

export const iconBox = style([
  flex({ align: 'center', justify: 'end' }),
  {
    position: 'absolute',
    width: 44,
    height: 'auto',
    margin: 0,
  },
]);

export const searchIcon = style({
  width: 15,
  height: 15,
});
