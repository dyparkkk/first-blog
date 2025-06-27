import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme('body', {
  colors: {
    primary: '#e36226ff',
    text: {
      100: '#111111ff',
      65: '#111111a5',
      8: '#11111115',
    },  
    white: {
      100: '#ffffffff',
      65: '#ffffffa5',
      50: '#ffffff80',
      8: '#ffffff15',
    },
  },
});
