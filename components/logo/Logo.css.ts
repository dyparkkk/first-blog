import { style } from '@vanilla-extract/css';

export const logo = style({
  width: '50px',
  height: '50px',
  transition: 'transform 0.5s ease',

  selectors: {
    '&:hover': {
      transform: 'rotate(360deg)',
    },
  },
});
