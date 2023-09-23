import { useContext } from 'react';
import { MapContext } from './MapContext';

export function useMap() {
  const context = useContext(MapContext)
  if (!context) throw new Error("The hook 'useMap' must be used inside a 'MapProvider'")

  return context;
}