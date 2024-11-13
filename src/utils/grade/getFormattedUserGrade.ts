import { FormattedGrade, Grade } from '@/types/grade';

export const getFormattedUserGrade = (originGrade: Grade): FormattedGrade => {
  switch (originGrade) {
    case 'SEED':
      return '씨앗 등급';
    case 'SPROUT':
      return '새싹 등급';
    case 'STEM':
      return '가지 등급';
    case 'FRUIT':
      return '열매 등급';
    case 'HARVEST':
      return '수확 등급';
    case 'FARMER':
      return '농사꾼 등급';
    default:
      throw new Error('잘못된 등급입니다.');
  }
};
