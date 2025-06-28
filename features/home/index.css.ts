import { style } from '@vanilla-extract/css';
import { flex } from '@/styles/flex.css';
import { lineClamp } from '@/styles/text.css';

export const container = style([
  flex({ direction: 'column', align: 'center', justify: 'start' }),
  {
    margin: '0px 60px',
    width: 980,
    maxWidth: 'calc(100% - 120px)',
    gap: 32,
    '@media': {
      'screen and (max-width: 1140px)': {
        maxWidth: 'calc(100% - 80px)',
        margin: '0px 40px',
      },
      'screen and (max-width: 840px)': {
        maxWidth: 'calc(100% - 60px)',
        margin: '0px 30px',
      },
      'screen and (max-width: 540px)': {
        maxWidth: 'calc(100% - 40px)',
        margin: '0px 20px',
      },
    },
  },
]);
