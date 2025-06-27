import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const name = style({
  color: theme.colors.primary,
  lineHeight: 1.4,
  textAlign: 'left',
  textDecoration: 'none',
});

export const nameAnimation = style({
  width: '100%',
  height: '2px',
  background: theme.colors.primary,
  transform: 'scaleX(0)',
  transformOrigin: 'center left',
  transition: 'transform 0.4s cubic-bezier(0.4, 0.4, 0, 1)',

  selectors: {
    [`${name}:hover + &`]: {
      transform: 'scaleX(1)',
    },
    [`${name}:not(:hover) + &`]: {
      transform: 'scaleX(0)',
    },
  },
});

export const circle = style({
  background: 'transparent',
  border: `2px solid ${theme.colors.primary}`,
  borderRadius: '50%',
  width: 8,
  height: 8,
});