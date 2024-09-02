import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const globalStyles = css`
  ${emotionNormalize}

  * {
    box-sizing: border-box;
  }

  body {
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
    font-weight: 500;
  }

  /* a 링크 초기화 */
  a {
    text-decoration: none;
  }

  /* 블릿기호 초기화 */
  ul,
  li,
  ol {
    list-style: none;
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
`;

export default globalStyles;
