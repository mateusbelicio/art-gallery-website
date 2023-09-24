import React, { createContext, useReducer, useRef } from 'react';
import { Map } from 'mapbox-gl';

interface MapProps {
  children?: React.ReactNode;
}

enum MapActionKind {
  CHANGE_POSITION = 'map/changePosition',
  CHANGE_STYLE = 'map/changeStyle',
  CHANGE_ZOOM = 'map/changeZoom',
}

interface MapState {
  position: { lat: number; lng: number };
  style: string;
  zoom: number;
}

interface MapAction {
  type: MapActionKind;
  payload: string | number | { lat: number; lng: number };
}

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

interface IMapContext extends MapState {
  map: React.MutableRefObject<Map | null>;
  changeMapPosition: (lat: number, lng: number) => void;
  changeMapZoom: (style: number) => void;
  changeMapStyle: (zoom: string) => void;
}

export const MapContext = createContext<IMapContext | null>(null);

export function MapProvider({ children }: MapProps) {
  const [{ position, style, zoom }, dispatch] = useReducer(reducer, {
    position: { lat: 0, lng: 0 },
    style: 'mapbox://styles/mapbox/streets-v12',
    zoom: 5,
  });

  const map = useRef<Map | null>(null);

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
      value={{ map, position, changeMapPosition, zoom, changeMapZoom, style, changeMapStyle }}
    >
      {children}
    </MapContext.Provider>
  );
}
