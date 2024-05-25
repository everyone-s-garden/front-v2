import { useState, useEffect } from 'react';

interface locationType {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}

const useGeolocation = () => {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  const onSuccess = (location: {
    coords: { latitude: number; longitude: number };
  }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    let watcher: number | null = null;
    if ('geolocation' in navigator) {
      watcher = navigator.geolocation.watchPosition(onSuccess, onError);
    } else {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }

    return () => {
      if (watcher !== null) {
        navigator.geolocation.clearWatch(watcher);
      }
    };
  }, []);

  return location;
};

export default useGeolocation;
