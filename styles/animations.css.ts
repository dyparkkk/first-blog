import { style } from '@vanilla-extract/css';
import { theme } from './theme.css';

export const animations = {
  scaleX: (color: string = theme.colors.primary, triggerClass: string) => {
    return style({
      width: '100%',
      height: 2,
      background: color,
      transform: 'scaleX(0)',
      transformOrigin: 'center left',
      transition: `transform 0.4s cubic-bezier(0.4, 0.4, 0, 1)`,

      selectors: {
        [`${triggerClass}:hover + &`]: {
          transform: 'scaleX(1)',
        },
        [`${triggerClass}:not(:hover) + &`]: {
          transform: 'scaleX(0)',
        },
      },
    });
  },
};
