import { recipe } from '@vanilla-extract/recipes';

export const flex = recipe({
  base: {
    display: 'flex',
  },

  variants: {
    position: {
      fixed: {
        position: 'fixed',
      },
      fixedTop: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    justify: {
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      start: {
        justifyContent: 'start',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'start',
      },
      end: {
        alignItems: 'end',
      },
    },
  },
});
