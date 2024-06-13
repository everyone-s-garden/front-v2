import {
  mobile1,
  mobile10,
  mobile11,
  mobile12,
  mobile2,
  mobile3,
  mobile4,
  mobile5,
  mobile6,
  mobile7,
  mobile8,
  mobile9,
  pc1,
  pc10,
  pc11,
  pc12,
  pc2,
  pc3,
  pc4,
  pc5,
  pc6,
  pc7,
  pc8,
  pc9,
} from '@/assets/images/month';

interface MonthImages {
  pc: string;
  mobile: string;
}

export const getMonthImage = (month: number): MonthImages => {
  switch (month) {
    case 1:
      return { pc: pc1, mobile: mobile1 };
    case 2:
      return { pc: pc2, mobile: mobile2 };
    case 3:
      return { pc: pc3, mobile: mobile3 };
    case 4:
      return { pc: pc4, mobile: mobile4 };
    case 5:
      return { pc: pc5, mobile: mobile5 };
    case 6:
      return { pc: pc6, mobile: mobile6 };
    case 7:
      return { pc: pc7, mobile: mobile7 };
    case 8:
      return { pc: pc8, mobile: mobile8 };
    case 9:
      return { pc: pc9, mobile: mobile9 };
    case 10:
      return { pc: pc10, mobile: mobile10 };
    case 11:
      return { pc: pc11, mobile: mobile11 };
    case 12:
      return { pc: pc12, mobile: mobile12 };
    default:
      return { pc: pc1, mobile: mobile1 };
  }
};
