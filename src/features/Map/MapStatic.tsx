import { useMap } from './useMap';
import * as Styles from './Map.style';

interface MapStaticProps {
  width: number;
  height: number;
}

function MapStatic({ width, height }: MapStaticProps) {
  const { position, zoom } = useMap();

  const urlTemplate =
    'https://api.mapbox.com/styles/v1/%USERNAME%/%STYLE%/static/%LNG%,%LAT%,%ZOOM%/%WIDTH%x%HEIGHT%?access_token=%ACCESS_TOKEN%';

  const url = urlTemplate
    .replace('%USERNAME%', import.meta.env.VITE_MAPBOX_USERNAME)
    .replace('%STYLE%', import.meta.env.VITE_MAPBOX_STYLE_ID)
    .replace('%LNG%', position.lng.toString())
    .replace('%LAT%', position.lat.toString())
    .replace('%ZOOM%', zoom.toString())
    .replace('%WIDTH%', width.toString())
    .replace('%HEIGHT%', height.toString())
    .replace('%ACCESS_TOKEN%', import.meta.env.VITE_MAPBOX_ACCESS_TOKEN);

  return <Styles.MapStatic $url={url} />;
}

export default MapStatic;
