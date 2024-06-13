export type DefaultCategory =
  | 'OFF_TRACK'
  | 'INACCURATE_INFORMATION'
  | 'ADVERTISING'
  | 'SPAMMING'
  | 'COPYRIGHT_INFRINGEMENT'
  | 'SWEAR_WORD'
  | 'SENSATIONAL'
  | 'PERSONAL_INFORMATION_EXPOSURE'
  | 'COMMENTS';

export type ChatCategory =
  | 'NON_MANNER_USER'
  | 'DISPUTE'
  | 'FRAUD'
  | 'SWEAR_WORD'
  | 'INAPPROPRIATE_BEHAVIOR'
  | 'COMMENTS';

export interface DefaultReport {
  id: string;
  values: {
    content: string;
    reportType: string;
  };
}

export interface ChatReport {
  id: string;
  values: {
    reportedMemberId: number;
    reportContent: string;
    reportType: string;
  };
}
