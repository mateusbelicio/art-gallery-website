import React from 'react';
import mapboxgl from 'mapbox-gl';

import { useMap } from './useMap';

import MapStatic from './MapStatic';
import Loader from '@/ui/Loader';

import * as Styles from './Map.style';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function MapContainer(): React.JSX.Element {
  const { mapIsLoading, mapContainer } = useMap();

  const MAX_MAP_HEIGHT = 600;
  const MAX_MAP_WIDTH = window.innerWidth > 1280 ? 1280 : window.innerWidth;

  return (
    <Styles.MapBox>
      <Styles.MapContainer $isLoading={mapIsLoading} ref={mapContainer} className="map-container" />
      <MapStatic height={MAX_MAP_HEIGHT} width={MAX_MAP_WIDTH} />
      {mapIsLoading && <Loader />}
    </Styles.MapBox>
  );
}

export default MapContainer;
