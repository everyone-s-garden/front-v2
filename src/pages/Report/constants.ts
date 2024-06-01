const REPORT_TYPE = {
  DEFAULT: {
    OFF_TRACK: '주제와 맞지 않음',
    INACCURATE_INFORMATION: '정보가 부정확함',
    ADVERTISING: '지나친 광고성',
    SPAMMING: '도배 및 중복 게시물',
    COPYRIGHT_INFRINGEMENT: '저작권 침해 우려됨',
    SWEAR_WORD: '욕설/비방이 심함',
    SENSATIONAL: '외설적인 내용',
    PERSONAL_INFORMATION_EXPOSURE: '개인정보 노출',
    COMMENTS: '기타',
  },
  CHAT: {
    NON_MANNER_USER: '비매너 사용자',
    DISPUTE: '거래 중 분쟁 발생',
    FRAUD: '사기',
    SWEAR_WORD: '욕설 및 비방, 혐오표현',
    INAPPROPRIATE_BEHAVIOR: '부적절한 행위',
    COMMENTS: '기타',
  },
};

export const REPORT_DATA = {
  garden: {
    name: '내 주변 분양',
    color: 'green',
    report: REPORT_TYPE.DEFAULT,
  },
  crop: {
    name: '작물거래',
    color: 'green',
    report: REPORT_TYPE.DEFAULT,
  },
  chat: {
    name: '거래',
    color: 'orange',
    report: REPORT_TYPE.CHAT,
  },
  community_post: {
    name: '속닥속닥 게시글',
    color: 'orange',
    report: REPORT_TYPE.DEFAULT,
  },
  community_comment: {
    name: '속닥속닥 댓글',
    color: 'orange',
    report: REPORT_TYPE.DEFAULT,
  },
};

export const ERROR = {
  POST_ALREADY_REPORTED: '동일한 커뮤니티 게시글에는 신고가 한번만 가능합니다.',
};
