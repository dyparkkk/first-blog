import { style } from '@vanilla-extract/css';
import { fill } from '@/styles/fill.css';
import { flex } from '@/styles/flex.css';
import { theme } from '@/styles/theme.css';

export const container = style([
  fill(),
  flex({ direction: 'column', align: 'center', justify: 'start' }),
  {
    background: theme.colors.background,
    padding: '200px 0 0 0',
    width: '100%',
    gap: 60,
  },
]);
