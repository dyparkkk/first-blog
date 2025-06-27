import { flex } from '@/styles/flex.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { theme } from '@/styles/theme.css';

export const divider = style([
  flex({ direction: 'column', justify: 'start', align: 'start' }),
  {
    gap: 4,
    margin: '20px 0px 20px 0px',
    width: '100%',
  },
]);

export const line = recipe({
  base: {
    height: 1,
    width: '100%',
  },
  variants: {
    color: {
      gray: {
        background: theme.colors.text[8],
      },
      lightWhite: {
        background: theme.colors.white[8],
      },
      white: {
        background: theme.colors.white[100],
      },
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});

export const halfLine = recipe({
  base: {
    height: 1,
    width: '50%',
  },
  variants: {
    color: {
      gray: {
        background: theme.colors.text[8],
      },
      lightWhite: {
        background: theme.colors.white[8],
      },
      white: {
        background: theme.colors.white[100],
      },
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});
