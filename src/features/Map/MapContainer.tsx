import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';

import { useMap } from './useMap';

import MapStatic from './MapStatic';

import * as Styles from './Map.style';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function MapContainer(): React.JSX.Element {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [mapIsLoading, setMapIsLoading] = useState(false);

  const { map, position, zoom, style } = useMap();

  useEffect(() => {
    map.current = new Map({
      container: mapContainer.current || 'map-container',
      center: [position.lng, position.lat],
      style,
      zoom,
    });
  }, [position.lng, position.lat, zoom, style, map]);

  useEffect(() => {
    if (!map.current) return;

    setMapIsLoading(true);
    map.current.on('load', () => setMapIsLoading(false));
  }, [map]);

  const MAX_MAP_HEIGHT = 600;
  const MAX_MAP_WIDTH = window.innerWidth > 1280 ? 1280 : window.innerWidth;

  return (
    <Styles.MapBox>
      <Styles.MapContainer $isLoading={mapIsLoading} ref={mapContainer} className="map-container" />
      <MapStatic height={MAX_MAP_HEIGHT} width={MAX_MAP_WIDTH} />
    </Styles.MapBox>
  );
}

export default MapContainer;
