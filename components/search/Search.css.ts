import { style } from '@vanilla-extract/css';
import { flex } from '@/styles/flex.css';

export const form = style([
  flex({ direction: 'row', align: 'center', justify: 'center' }),
  {
    border: '1px solid #11111114',
    borderRadius: 30,
    width: 'auto',
    maxWidth: '100%',
    height: '52px',
    background:
      'linear-gradient(rgba(17, 17, 17, 0.04) 0%, rgba(17, 17, 17, 0) 100%)',
  },
]);

export const input = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: '1rem',
  background: 'rgba(0,0,0,0.0)',
  padding: '10px 16px 10px 60px',
  color: '#111111ff',
});

export const button = style([
  flex({ direction: 'row', justify: 'center', align: 'center' }),
  {
    border: '1px solid #11111115',
    borderRadius: 50,
    boxShadow: 'none',
    lineHeight: 1.4,
    fontSize: 15,
    width: 44,
    height: 44,
    justifyContent: 'center',
    margin: '0px 4px 0px 0px',
    zIndex: 2,
    background:
      'linear-gradient(0deg, rgba(17, 17, 17, 0.043) 0%, rgba(17, 17, 17, 0) 100%)',
  },
]);

export const arrowIcon = style({
  width: 20,
  height: 'auto',
});

export const iconBox = style([
  flex({ align: 'center', justify: 'end' }),
  {
    position: 'absolute',
    width: 48,
    height: 'auto',
    margin: 0,
  },
]);
