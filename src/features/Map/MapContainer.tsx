import React, { useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';

import * as Styles from './Map.style';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMap } from './useMap';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function MapContainer(): React.JSX.Element {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);

  const { position, zoom, style } = useMap();

  useEffect(() => {
    // if (map.current) return;

    map.current = new Map({
      container: mapContainer.current || '',
      center: [position.lng, position.lat],
      style,
      zoom,
    });
  }, [position.lng, position.lat, zoom, style]);

  return <Styles.MapContainer ref={mapContainer} className="map-container" />;
}

export default MapContainer;
