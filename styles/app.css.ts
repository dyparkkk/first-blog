import { globalStyle } from '@vanilla-extract/css';
import { font, pretendardMedium } from '@/styles/fonts/fonts.css';

globalStyle('html, body #root', {
  fontFamily: pretendardMedium,
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.9,
  textAlign: 'left',
});
