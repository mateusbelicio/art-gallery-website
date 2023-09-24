import { Map, Marker, Popup } from 'mapbox-gl';

export enum MapActionKind {
  CHANGE_POSITION = 'map/changePosition',
  CHANGE_STYLE = 'map/changeStyle',
  CHANGE_ZOOM = 'map/changeZoom',
}

export interface MapProps {
  children?: React.ReactNode;
}

export interface MapState {
  position: { lat: number; lng: number };
  style: string;
  zoom: number;
}

export interface MapAction {
  type: MapActionKind;
  payload: string | number | { lat: number; lng: number };
}

export interface IMapContext extends MapState {
  map: React.MutableRefObject<Map | null>;
  mapContainer: React.MutableRefObject<HTMLDivElement | null>;
  markerElement: React.MutableRefObject<HTMLElement | null>;
  marker: React.MutableRefObject<Marker | null>;
  popup: React.MutableRefObject<Popup | null>;
  mapIsLoading: boolean;
  changeMapPosition: (lat: number, lng: number) => void;
  changeMapZoom: (style: number) => void;
  changeMapStyle: (zoom: string) => void;
}
