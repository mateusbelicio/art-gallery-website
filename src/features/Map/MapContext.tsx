import { createContext, useReducer, useRef, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Map, Marker, Popup } from 'mapbox-gl';

import { IMapContext, MapAction, MapActionKind, MapProps, MapState } from './Map.types';
import Icon from '@/ui/Icon';

export const MapContext = createContext<IMapContext | null>(null);

function reducer(state: MapState, action: MapAction) {
  switch (action.type) {
    case MapActionKind.CHANGE_POSITION:
      if (typeof action.payload !== 'object') return state;
      else return { ...state, position: { lat: action.payload.lat, lng: action.payload.lng } };
    case MapActionKind.CHANGE_STYLE:
      if (typeof action.payload !== 'string') return state;
      return { ...state, style: action.payload };
    case MapActionKind.CHANGE_ZOOM:
      if (typeof action.payload !== 'number') return state;
      return { ...state, zoom: action.payload };
    default:
      return state;
  }
}

export function MapProvider({ children }: MapProps) {
  const [mapIsLoading, setMapIsLoading] = useState(false);
  const [{ position, style, zoom }, dispatch] = useReducer(reducer, {
    position: { lat: 0, lng: 0 },
    style: 'mapbox://styles/mapbox/streets-v12',
    zoom: 5,
  });

  const map = useRef<Map | null>(null);
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const markerElement = useRef<HTMLElement | null>(null);
  const marker = useRef<Marker | null>(null);
  const popup = useRef<Popup | null>(null);

  useEffect(() => {
    map.current = new Map({
      attributionControl: false,
      bearingSnap: 180,
      center: [position.lng, position.lat],
      container: mapContainer.current || 'map-container',
      logoPosition: 'bottom-left',
      maxZoom: 17,
      minZoom: 12,
      pitchWithRotate: false,
      renderWorldCopies: false,
      style,
      zoom,
    });

    markerElement.current = document.createElement('div');
    createRoot(markerElement.current).render(<Icon name="location" width={44} height={66} />);

    popup.current = new Popup({ anchor: 'bottom', offset: 52 }).setHTML(`
      <h4>Art gallery</h4>
      <p>99 King Street</p>
      <p>Newport RI 02840 - USA</p>
    `);

    marker.current = new Marker({
      anchor: 'bottom',
      color: '#151515',
      element: markerElement.current,
    })
      .setLngLat([position.lng, position.lat])
      .addTo(map.current)
      .setPopup(popup.current || '');
  }, [position.lng, position.lat, zoom, style, map, markerElement, popup, marker, mapContainer]);

  useEffect(() => {
    if (!map.current) return;

    setMapIsLoading(true);
    map.current.on('load', () => setMapIsLoading(false));
  }, [map]);

  const changeMapPosition = (lat: number, lng: number) => {
    dispatch({ type: MapActionKind.CHANGE_POSITION, payload: { lat, lng } });
  };

  const changeMapStyle = (style: string) => {
    dispatch({ type: MapActionKind.CHANGE_STYLE, payload: style });
  };

  const changeMapZoom = (zoom: number) => {
    dispatch({ type: MapActionKind.CHANGE_ZOOM, payload: zoom });
  };

  return (
    <MapContext.Provider
      value={{
        map,
        mapContainer,
        mapIsLoading,
        position,
        changeMapPosition,
        zoom,
        changeMapZoom,
        style,
        changeMapStyle,
        markerElement,
        marker,
        popup,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
