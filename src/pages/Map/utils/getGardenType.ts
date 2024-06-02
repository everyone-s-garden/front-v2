const getGardenType = (headerOption: string) => {
  let gardenType: 'PUBLIC' | 'PRIVATE' | 'ALL';

  switch (headerOption) {
    case '공공':
      gardenType = 'PUBLIC';
      break;

    case '개인':
      gardenType = 'PRIVATE';
      break;

    case '둘다 표시':
      gardenType = 'ALL';
      break;

    default:
      gardenType = 'ALL';
      break;
  }

  return gardenType;
};

export default getGardenType;
