import { flex } from '@/styles/flex.css';
import { style } from '@vanilla-extract/css';

export const container = style([
  flex({
    position: 'fixedTop',
    direction: 'row',
    justify: 'spaceBetween',
    align: 'center',
  }),
  {
    padding: '0 30px',
    width: '100%',
    height: '80px',
  },
]);

export const logo = style([flex({ direction: 'row', align: 'center' })]);

export const menuContainer = style([
  flex({ direction: 'row', align: 'center' }),
  {
    gap: '12px',
  },
]);

export const menuBox = style([
  flex({ direction: 'row', justify: 'center', align: 'center' }),
  {
    width: '52px',
  },
]);
