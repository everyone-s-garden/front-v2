import { css } from '@emotion/react';

const globalStyles = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css');

  * {
    box-sizing: border-box;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    color: #282828;
    font-size: 16px;
  }

  *::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #bebebe;
    border-radius: 7px;
  }

  body {
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  /* a 링크 초기화 */
  a {
    text-decoration: none;
  }

  /* 폰트 스타일 초기화 */
  em,
  address {
    font-style: normal;
  }

  /* 블릿기호 초기화 */
  ul,
  li,
  ol {
    list-style: none;
  }

  /* 텍스트 태그 */
  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  div,
  a,
  input,
  label,
  select,
  option,
  textarea {
    word-break: break-all;
    white-space: pre-line;
  }

  /* 버튼 초기화 */
  button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
  }
  button:focus {
    outline: none;
  }

  /* input */
  input {
    outline: none;
  }

  img {
    object-fit: cover;
  }

  /* clearfix */
  .clearfix {
    zoom: 1;
  }
  .clearfix:before,
  .clearfix:after {
    display: block;
    content: '';
    line-height: 0;
  }
  .clearfix::after {
    clear: both;
  }

  /* IR 효과 */
  .ir_pm {
    display: block;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    text-indent: -9999px;
  } /* 의미있는 이미지의 대체 텍스트를 제공하는 경우(Phark Method) */
  .ir_wa {
    display: block;
    overflow: hidden;
    position: relative;
    z-index: -1;
    width: 100%;
    height: 100%;
  } /* 의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때(WA IR) */
  .ir_su {
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: -9999px;
  } /* 대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때 */
`;

export default globalStyles;
