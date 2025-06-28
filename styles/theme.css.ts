import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme('body', {
  colors: {
    primary: '#e36226ff',
    text: {
      100: '#111111ff',
      65: '#111111a5',
      50: '#11111180',
      8: '#11111115',
    },
    white: {
      100: '#ffffffff',
      65: '#ffffffa5',
      50: '#ffffff80',
      8: '#ffffff15',
    },
    boarder: {
      100: '#111111ff',
      8: '#11111115',
      4: '#11111114',
    },
    background: '#fbfbf9ff',
  },
});

export const gradients = {
  background: {
    light: (opacity = 0.04) =>
      `linear-gradient(rgba(17, 17, 17, ${opacity}) 0%, rgba(17, 17, 17, 0) 100%)`,

    vertical: (opacity = 0.043) =>
      `linear-gradient(0deg, rgba(17, 17, 17, ${opacity}) 0%, rgba(17, 17, 17, 0) 100%)`,
    dark: 'linear-gradient(0deg, rgb(17, 17, 17) 0%, rgb(51, 51, 51) 100%)',
    footer:
      'linear-gradient(0deg, rgba(227, 218, 210, 0.48) 0%, rgba(227, 218, 210, 0) 100%)',
  },
};
