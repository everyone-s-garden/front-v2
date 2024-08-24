type GardenType =
  | 'EVERY_FARM_PUBLIC'
  | 'EVERY_FARM_PRIVATE'
  | 'PRIVATE'
  | 'PUBLIC';

type GardenStatus = 'ACTIVE' | 'INACTIVE';

interface Garden {
  gardenId: number;
  latitude: number;
  longitude: number;
  gardenName: string;
  gardenType: GardenType;
  price: string;
  size: string;
  gardenStatus: GardenStatus;
  images: (string | null)[];
}

interface GardenDetail extends Garden {
  address: string;
  contact: string;
  gardenDescription: string;
  gardenFacilities: string;
  gardenLikeId: number;
  recruitEndDate: string;
  recruitStartDate: string;
  roomId: number;
  writerId: number;
  openAPIResourceId: string;
}
