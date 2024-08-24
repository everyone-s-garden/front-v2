import { useEffect, useState } from 'react';
import { Overlay, useMap, useNavermaps } from 'react-naver-maps';
import styles from './CustomMarker.module.css';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';
import useShowGardenDetailStore from '@/stores/useShowGardenDetailStore';
import useShowMapAside from '@/stores/useShowMapAside';
import { makeMarkerClustering } from '@/utils/makeMarkerClustering/makeMarkerClustering';

interface MakerClusterProps {
  gardens: Garden[];
}

const MarkerCluster = ({ gardens }: MakerClusterProps) => {
  const { setIsShowAside } = useShowMapAside();
  const navermaps = useNavermaps();
  const map = useMap();
  const { setGardenId } = useMapGardenDetailIdStore();
  const MarkerClustering = makeMarkerClustering(window.naver);
  const { setShowGardenDetail } = useShowGardenDetailStore();

  const clusterMarker = {
    content: `<div class=${styles.cluster_marker}></div>`,
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(60, 60),
  };
  const [cluster, setCluster] = useState(() => {
    const markers: naver.maps.Marker[] = [];
    const cluster = new MarkerClustering({
      minClusterSize: 2,
      maxZoom: 13,
      map: map,
      markers: markers,
      disableClickZoom: false,
      gridSize: 120,
      icons: [clusterMarker],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      stylingFunction: function (clusterMarker: any, count: number) {
        clusterMarker.getElement().querySelector('div:first-child').innerText =
          count;
      },
    });

    return cluster;
  });
  useEffect(() => {
    if (!gardens || gardens.length === 0) return;

    cluster.setMap(null);
    cluster.DEFAULT_OPTIONS.markers = [];
    setCluster(() => {
      const markers: naver.maps.Marker[] = [];
      gardens.forEach((garden) => {
        const latlng = new naver.maps.LatLng(garden.latitude, garden.longitude),
          marker = new naver.maps.Marker({
            position: latlng,
            icon: {
              content: `<div class="${styles.gardenMarker}">
                  <svg width="33" height="55" viewBox="0 0 33 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.5 17.5455C32.5 21.1141 31.4904 25.2181 29.9527 29.3895C28.4172 33.5551 26.3667 37.7569 24.3114 41.5124C22.2567 45.2667 20.2013 48.5672 18.6594 50.9293C17.8887 52.1101 17.2466 53.0558 16.7976 53.7058C16.6862 53.8671 16.5866 54.0102 16.5 54.1341C16.4134 54.0102 16.3138 53.8671 16.2024 53.7058C15.7534 53.0558 15.1114 52.1101 14.3406 50.9293C12.7987 48.5672 10.7433 45.2667 8.68861 41.5124C6.63325 37.7569 4.58282 33.5551 3.04727 29.3895C1.50957 25.2181 0.5 21.1141 0.5 17.5455C0.5 8.57047 7.69829 0.5 16.5 0.5C25.3017 0.5 32.5 8.57047 32.5 17.5455Z" fill="#9ACD79" stroke="#DDE9C8"/>
                    <path d="M16.1144 16.9607C18.4617 16.9607 20.3646 15.0374 20.3646 12.6649C20.3646 10.2924 18.4617 8.36914 16.1144 8.36914C13.7671 8.36914 11.8643 10.2924 11.8643 12.6649C11.8643 15.0374 13.7671 16.9607 16.1144 16.9607Z" fill="#DDE9C8"/>
                    <path d="M14.1507 18.4033C16.8988 21.1809 16.2843 26.3048 16.2843 26.3048C16.2843 26.3048 11.2148 26.9259 8.46671 24.1483C5.71861 21.3707 6.33309 16.2468 6.33309 16.2468C6.33309 16.2468 11.4026 15.6257 14.1507 18.4033Z" fill="#DDE9C8"/>
                    <path d="M17.9853 18.4033C15.2372 21.1809 15.8516 26.3048 15.8516 26.3048C15.8516 26.3048 20.9211 26.9259 23.6692 24.1483C26.4173 21.3707 25.8028 16.2468 25.8028 16.2468C25.8028 16.2468 20.7334 15.6257 17.9853 18.4033Z" fill="#DDE9C8"/>
                    <path d="M19.3746 12.695L16.0957 9.38086L12.8168 12.695L16.0957 16.0091L19.3746 12.695Z" fill="#9ACD79"/>
                  </svg>
                </div>`,
              origin: new naver.maps.Point(0, 67),
              anchor: new naver.maps.Point(20, 67),
            },
          });

        const onClickHandler = () => {
          setIsShowAside(true);
          setShowGardenDetail(true);
          setGardenId(garden.gardenId);
        };

        const onMouseOverHandler = () => {
          marker.setZIndex(101);
        };
        const onMouseOutHandler = () => {
          marker.setZIndex(100);
        };

        naver.maps.Event.addListener(marker, 'click', onClickHandler);
        naver.maps.Event.addListener(marker, 'mouseover', onMouseOverHandler);
        naver.maps.Event.addListener(marker, 'mouseout', onMouseOutHandler);

        markers.push(marker);
      });

      const cluster = new MarkerClustering({
        minClusterSize: 2,
        maxZoom: 13,
        map: map,
        markers: markers,
        disableClickZoom: false,
        gridSize: 120,
        icons: [clusterMarker],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stylingFunction: function (clusterMarker: any, count: number) {
          clusterMarker
            .getElement()
            .querySelector('div:first-child').innerText = count;
        },
      });

      return cluster;
    });
  }, [gardens]);

  return <Overlay element={cluster} />;
};

export default MarkerCluster;
