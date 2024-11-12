import { Grade } from '@/types/grade';

export const getGradeColor = (originGrade: Grade) => {
  switch (originGrade) {
    case 'SEED':
      return '#E06B9F';
    case 'SPROUT':
      return '#DCA451';
    case 'STEM':
      return '#54A173';
    case 'FRUIT':
      return '#5457A1';
    case 'HARVEST':
      return '#C25200';
    case 'FARMER':
      return '#282828';
    default:
      throw new Error('잘못된 등급입니다.');
  }
};
