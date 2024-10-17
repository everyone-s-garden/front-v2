export type Name =
  | 'garden'
  | 'crop'
  | 'chat'
  | 'community_post'
  | 'community_comment';
export type Color = 'green';

export interface ReportState {
  from: string;
  name: Name;
  color: Color;
  reportId: string;
  memberId?: string;
}
