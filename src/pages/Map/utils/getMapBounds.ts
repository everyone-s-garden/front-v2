const getMapBounds = (map: naver.maps.Map | null) => {
  const bounds = map?.getBounds();
  const startLat = bounds?.minY();
  const startLong = bounds?.minX();
  const endLat = bounds?.maxY();
  const endLong = bounds?.maxX();

  return { startLat, startLong, endLat, endLong };
};

export default getMapBounds;
