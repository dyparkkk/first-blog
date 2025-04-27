import { style } from '@vanilla-extract/css';
import { fill } from '@/styles/fill.css';

export const container = style([
  fill(),
  {
    background: 'white',
    overflow: 'auto',
    padding: '200px 0 0 0',
  },
]);
