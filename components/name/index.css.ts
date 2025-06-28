import { animations } from '@/styles/animations.css';
import { theme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const name = style({
  color: theme.colors.primary,
  lineHeight: 1.4,
  textAlign: 'left',
  textDecoration: 'none',
});

export const nameAnimation = style([
  animations.scaleX(theme.colors.primary, name),
]);

export const circle = style({
  background: 'transparent',
  border: `2px solid ${theme.colors.primary}`,
  borderRadius: '50%',
  width: 8,
  height: 8,
  transform: 'translateY(-2px)',
});
