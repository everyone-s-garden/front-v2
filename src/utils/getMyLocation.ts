export interface MyLocation {
  location: UserLocation;
  errMsg: string;
}

export default function getMyLocation(): Promise<MyLocation> {
  return new Promise<MyLocation>((resolve) => {
    function success(position: {
      coords: { latitude: number; longitude: number };
    }) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      resolve({
        location: {
          lat: latitude,
          lng: longitude,
        },
        errMsg: '',
      });
    }

    function error() {
      resolve({
        location: {
          lat: 37.576022,
          lng: 126.9769,
        },
        errMsg: '위치 사용 권한을 허용해 주세요!',
      });
    }

    if (!navigator.geolocation) {
      resolve({
        location: {
          lat: 37.576022,
          lng: 126.9769,
        },
        errMsg: '위치 찾기 기능을 사용할 수 없는 환경입니다!',
      });
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
}
