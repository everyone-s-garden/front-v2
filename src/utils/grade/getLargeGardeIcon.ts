import {
  Farmer,
  Fruit,
  Harvest,
  Seed,
  Sprout,
  Stem,
} from '@/assets/icons/grade/large';
import { Grade } from '@/types/grade';

export const getLargeGradeIcon = (grade: Grade) => {
  switch (grade) {
    case 'SEED':
      return Seed;
    case 'SPROUT':
      return Sprout;
    case 'STEM':
      return Stem;
    case 'FRUIT':
      return Fruit;
    case 'HARVEST':
      return Harvest;
    case 'FARMER':
      return Farmer;
    default:
      throw new Error('잘못된 등급입니다.');
  }
};
