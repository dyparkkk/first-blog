import { flex } from '@/styles/flex.css';
import { gradients, theme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const loadMoreBox = style([
  flex({ justify: 'center', align: 'center' }),
  {
    width: '100%',
  },
]);

export const button = style([
  flex({ justify: 'center', align: 'center' }),
  {
    border: `0px solid ${theme.colors.boarder[8]}`,
    borderRadius: 48,
    boxShadow: `0px 0px 0px 1px ${theme.colors.boarder[8]}`,
    color: theme.colors.text[65],
    height: 52,
    width: 'calc(100% - 200px)',
    margin: '0px 100px',
    background: gradients.background.light(),
    cursor: 'pointer',
    transition: 'background 0.4s ease',

    ':hover': {
      background: gradients.background.light(0.08),
    },

    '@media': {
      'screen and (max-width: 1140px)': {
        width: 'calc(100% - 120px)',
        margin: '0px 60px',
      },
      'screen and (max-width: 840px)': {
        width: 'calc(100% - 80px)',
        margin: '0px 40px',
      },
      'screen and (max-width: 540px)': {
        width: 'calc(100% - 20px)',
        margin: '0px 10px',
      },
    },
  },
]);

export const buttonText = style({
  fontSize: 15,
  fontWeight: 400,
  lineHeight: 1.4,
});
