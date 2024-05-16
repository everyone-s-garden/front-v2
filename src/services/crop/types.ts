interface Crop {
  month: number;
  cropInfos: {
    name: string;
    description: string;
    link: string;
  }[];
}

export type MonthCrops = Crop[];
