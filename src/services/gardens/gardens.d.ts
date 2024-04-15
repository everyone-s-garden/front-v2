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
