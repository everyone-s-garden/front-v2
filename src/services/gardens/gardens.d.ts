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

interface ManagedGarden {
  myManagedGardenId: number;
  gardenName: string;
  useStartDate: string;
  useEndDate: string;
  images: string[];
  description: string;
}

interface OtherManagedGardenGetResponses {
  otherManagedGardenGetResponses: ManagedGarden[];
  nextManagedGardenId: number;
  hasNext: boolean;
}

interface GardenForSale {
  gardenId: number;
  gardenName: string;
  price: string;
  gardenStatus: 'ACTIVE' | 'INACTIVE' | 'PENDING';
  images: string[];
  isLiked: boolean;
}

interface OtherGardenGetResponse {
  otherGardenGetResponse: GardenForSale[];
  nextGardenId: number;
  hasNext: boolean;
}
