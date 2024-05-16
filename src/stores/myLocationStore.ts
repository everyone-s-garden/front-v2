import { create } from 'zustand';

interface MyLocation extends UserLocation {
  position: string;
}

interface MyLocationState {
  myLocation: MyLocation;
  setMyLocation: (location: MyLocation) => void;
  setMyLatLng: (location: UserLocation) => void;
  setMyPosition: (position: string) => void;
}

export const useMyLocationStore = create<MyLocationState>((set) => ({
  myLocation: {
    position: '서울특별시',
    lat: 37.576022,
    lng: 126.9769,
  },
  setMyLocation: (location: MyLocation) => set({ myLocation: location }),
  setMyLatLng: (location: UserLocation) =>
    set((state) => ({
      myLocation: {
        ...state.myLocation,
        lat: location.lat,
        lng: location.lng,
      },
    })),
  setMyPosition: (position: string) =>
    set((state) => ({
      myLocation: {
        ...state.myLocation,
        position,
      },
    })),
}));
