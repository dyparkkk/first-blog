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
    padding: '0 60px', // media 필요
    width: '100%',
    height: '90px',
  },
]);

export const logo = style([flex({ direction: 'row', align: 'center' })]);

export const menuContainer = style([
  flex({ direction: 'row', align: 'center' }),
  {
    pointerEvents: 'all',
    gap: '12px',
  },
]);

export const menuBox = style([
  flex({ direction: 'row', justify: 'center', align: 'center' }),
  {
    backgroundColor: 'white',
    pointerEvents: 'auto',
    width: '30px',
    height: '30px',
    zIndex: 1,
    transition: 'filter 0.3s ease',
    selectors: {
      '&:hover': {
        filter: 'invert(1)',
      },
    },
  },
]);

export const iconBox = style([
  flex({ direction: 'row', justify: 'center', align: 'center' }),
  {
    pointerEvents: 'auto',
    width: '52px',
    height: '52px',
  },
]);

export const iconAnimation = style({
  pointerEvents: 'auto',
  position: 'absolute',
  flex: 'none',
  width: '52px',
  height: '52px',
  opacity: 0,
  zIndex: -1,
  backgroundColor: '#111111ff',
  borderRadius: '50%',
  transform: 'scale(0.3, 0.3)',
  transition: 'transform 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      transform: 'scale(1,1)',
      opacity: 1,
    },
    '&:active': {
      transform: 'scale(0.7)',
    },
  },
});
