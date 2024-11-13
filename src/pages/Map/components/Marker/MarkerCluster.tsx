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
<svg width="23" height="38" viewBox="0 0 23 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.3 12.1223C22.3 14.5618 21.6092 17.3776 20.5496 20.252C19.4922 23.1206 18.0792 26.0165 16.6614 28.6071C15.2442 31.1966 13.8263 33.4734 12.7626 35.1031C12.2308 35.9176 11.788 36.5699 11.4785 37.018C11.4513 37.0573 11.4251 37.0951 11.4 37.1313C11.3749 37.0951 11.3487 37.0573 11.3215 37.018C11.012 36.5699 10.5692 35.9176 10.0374 35.1031C8.97369 33.4734 7.55582 31.1966 6.13861 28.6071C4.72075 26.0165 3.30782 23.1206 2.25039 20.252C1.19082 17.3776 0.5 14.5618 0.5 12.1223C0.5 5.99487 5.4156 0.5 11.4 0.5C17.3844 0.5 22.3 5.99487 22.3 12.1223Z" fill="#2DD38D" stroke="#D5F6E8"/>
<path d="M13.5683 8.75121C13.5683 10.1193 12.4724 11.2192 11.1318 11.2192C9.79118 11.2192 8.69531 10.1193 8.69531 8.75121C8.69531 7.38312 9.79118 6.2832 11.1318 6.2832C12.4724 6.2832 13.5683 7.38312 13.5683 8.75121Z" fill="#ABEDD1" stroke="#D5F6E8"/>
<path d="M9.42228 13.0662C10.2554 13.9083 10.6039 15.1391 10.7302 16.2217C10.7923 16.7548 10.7984 17.2325 10.7887 17.5766C10.7874 17.6225 10.7859 17.6659 10.7841 17.7066C10.7453 17.7083 10.7041 17.7098 10.6606 17.711C10.3207 17.7207 9.8489 17.7147 9.3224 17.6519C8.25361 17.5246 7.03825 17.1733 6.20605 16.3321C5.37294 15.4901 5.02443 14.2592 4.89817 13.1766C4.836 12.6435 4.82998 12.1658 4.83961 11.8217C4.8409 11.7759 4.84246 11.7325 4.84419 11.6917C4.88303 11.69 4.92426 11.6885 4.96772 11.6873C5.3076 11.6776 5.77943 11.6837 6.30593 11.7464C7.37472 11.8737 8.59008 12.2251 9.42228 13.0662Z" fill="#ABEDD1" stroke="#D5F6E8"/>
<path d="M17.2348 11.6873C17.2783 11.6885 17.3195 11.69 17.3584 11.6917C17.3601 11.7325 17.3617 11.7759 17.3629 11.8217C17.3726 12.1658 17.3666 12.6435 17.3044 13.1766C17.1781 14.2592 16.8296 15.4901 15.9965 16.3321C15.1643 17.1733 13.9489 17.5246 12.8802 17.6519C12.3536 17.7147 11.8818 17.7207 11.5419 17.711C11.4985 17.7098 11.4572 17.7083 11.4184 17.7066C11.4167 17.6659 11.4151 17.6225 11.4138 17.5766C11.4042 17.2325 11.4102 16.7548 11.4724 16.2217C11.5987 15.1391 11.9472 13.9083 12.7803 13.0662C13.6125 12.2251 14.8278 11.8737 15.8966 11.7464C16.4231 11.6837 16.8949 11.6776 17.2348 11.6873Z" fill="#ABEDD1" stroke="#D5F6E8"/>
<path d="M9.55899 8.77021L11.1211 7.19134L12.6832 8.77021L11.1211 10.3491L9.55899 8.77021Z" fill="#2DD38D" stroke="#D5F6E8"/>
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
