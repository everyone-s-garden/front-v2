// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'function-rules/scope-enum': [
      2,
      'always',
      ({ header }) => {
        const regex = /(feat|style|fix|refactor|docs|chore)+: .+/;
        if (regex.test(header)) {
          return [true];
        }

        return [
          false,
          '커밋 형식은 "prefix: commit message"의 형태여야 합니다.',
        ];
      },
    ],
  },
};
