interface gardenGetAllResponses {
  gardenGetAllResponses: Garden[];
  hasNext: boolean;
}

interface Garden {
  gardenId: number;
  latitude: number;
  longitude: number;
  gardenName: string;
  gardenType: 'PUBLIC';
  price: string;
  size: string;
  gardenStatus: 'ACTIVE' | 'INACTIVE';
  images: string[];
}

interface GardenFacility {
  isToilet: boolean;
  isWaterway: boolean;
  isEquipment: boolean;
}

interface GardenDetail {
  address: string;
  contact: string;
  gardenDescription: string;
  gardenFacility: GardenFacility;
  gardenId: number;
  gardenName: string;
  gardenStatus: 'ACTIVE' | 'INACTIVE';
  gardenType: 'PRIVATE' | 'PUBLIC';
  images: (string | null)[];
  gardenLikeId: number;
  latitude: number;
  longitude: number;
  price: string;
  recruitEndDate: string;
  recruitStartDate: string;
  roomId: number;
  size: string;
  writerId: number;
}
