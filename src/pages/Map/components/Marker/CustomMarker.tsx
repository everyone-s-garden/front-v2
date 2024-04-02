import { Marker } from 'react-naver-maps';
import styles from './CustomMarker.module.css';

interface CustomMarkerProps {
  navermaps: typeof naver.maps;
  position: Position;
}

interface Position {
  lat: number;
  lng: number;
}

const CustomMarker = ({ navermaps, position }: CustomMarkerProps) => {
  const markerHtml = `<div class="${styles.myMarker}"></div>`;
  const anchor = new navermaps.Point(10, 10);

  return (
    <Marker
      position={new navermaps.LatLng(position.lat, position.lng)}
      icon={{
        content: markerHtml,
        anchor: anchor,
      }}
    />
  );
};

export default CustomMarker;
