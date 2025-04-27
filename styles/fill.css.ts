import { recipe} from '@vanilla-extract/recipes';

export const fill = recipe({
  base: {
    width: '100%',
    height: '100vh',
    '@supports': {
      '(-webkit-touch-callout: none)': {
        height: '-webkit-fill-available',
      },
    }
  }
})