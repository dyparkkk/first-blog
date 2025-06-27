import { fontFace, globalFontFace, style } from '@vanilla-extract/css';

export const pretendardMedium = 'PretendardMedium';

globalFontFace(pretendardMedium, {
  src: 'url("/fonts/Pretendard-Medium.subset.woff2") format("woff2")',
  // fontDisplay: 'swap' // 로딩 전략
});

export const font = style({
  fontFamily: pretendardMedium,
});
