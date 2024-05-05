const POST_TYPE = {
  INFORMATION_SHARE: '정보 공유',
  GARDEN_SHOWCASE: '텃밭 자랑',
  QUESTION: '질문하기',
  ETC: '기타',
} as const;

const POST_TYPE_KO = {
  '정보 공유': 'INFORMATION_SHARE',
  '텃밭 자랑': 'GARDEN_SHOWCASE',
  질문하기: 'QUESTION',
  기타: 'ETC',
} as const;

const ORDER_BY_OPTIONS = {
  COMMENT_COUNT: '댓글순',
  RECENT_DATE: '최신 날짜순',
  OLDER_DATE: '오래된 날짜순',
  LIKE_COUNT: '좋아요 순',
} as const;

const ORDER_BY_OPTIONS_KO = {
  댓글순: 'COMMENT_COUNT',
  '최신 날짜순': 'RECENT_DATE',
  '오래된 날짜순': 'OLDER_DATE',
  '좋아요 순': 'LIKE_COUNT',
} as const;

const TEXT_SIZE_TYPE = {
  unstyled: '본문',
  'header-one': '제목 1',
  'header-two': '제목 2',
  'header-three': '서브',
} as const;

const TEXT_SIZE_TYPE_KO = {
  본문: 'unstyled',
  '제목 1': 'header-one',
  '제목 2': 'header-two',
  서브: 'header-three',
} as const;

const GRADE_TYPE = {
  SEED: '씨앗 등급',
} as const;

const GRADE_TYPE_KO = {
  '씨앗 등급': 'SEED',
} as const;

const COMMENT_ORDER_BY_OPTIONS = {
  RECENT_DATE: '최신 댓글순',
  OLDER_DATE: '오래된 댓글순',
  LIKE_COUNT: '좋아요 순',
} as const;

const COMMENT_ORDER_BY_OPTIONS_KO = {
  '최신 댓글순': 'RECENT_DATE',
  '오래된 댓글순': 'OLDER_DATE',
  '좋아요 순': 'LIKE_COUNT',
} as const;

export const POST = {
  TYPE: POST_TYPE,
  TYPE_KO: POST_TYPE_KO,
  ORDER: ORDER_BY_OPTIONS,
  ORDER_KO: ORDER_BY_OPTIONS_KO,
};

export const EDITOR = {
  SIZE: TEXT_SIZE_TYPE,
  SIZE_KO: TEXT_SIZE_TYPE_KO,
};

export const GRADE = {
  TYPE: GRADE_TYPE,
  TYPE_KO: GRADE_TYPE_KO,
};

export const COMMENT = {
  ORDER: COMMENT_ORDER_BY_OPTIONS,
  ORDER_KO: COMMENT_ORDER_BY_OPTIONS_KO,
};
