import { flex } from '@/styles/flex.css';
import { style } from '@vanilla-extract/css';

export const menuBox = style([
  flex({ direction: 'row', justify: 'center', align: 'center' }),
  {
    border: 0,
    backgroundColor: 'transparent',
    width: '52px',
    height: '52px',
    anchorName: '--category',
  },
]);

const iconFlex = flex({ direction: 'row', justify: 'center', align: 'center' });
const iconBaseProps = {
  backgroundColor: 'white',
  selectors: {
    [`.${menuBox}:hover &`]: {
      filter: 'invert(1)',
    },
  },
};

export const icon = style([
  iconFlex,
  iconBaseProps,
  {
    width: '24px',
    height: '24px',
  },
]);

export const iconX = style([
  iconFlex,
  iconBaseProps,
  {
    width: '20px',
    height: '20px',
  },
]);

export const iconAnimation = style({
  position: 'absolute',
  width: '48px',
  height: '48px',
  opacity: 0,
  zIndex: -1,
  backgroundColor: '#111111ff',
  borderRadius: '50%',
  transform: 'scale(0.3, 0.3)',
  transition: 'transform 0.2s ease-out',

  selectors: {
    [`.${menuBox}:hover &`]: {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
});
