import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '@/ui/Button';
import Section from '@/ui/Section';
import MapContainer from './MapContainer';

import * as Styles from './Map.style';
import { useMap } from './useMap';

function Map(): React.JSX.Element {
  const { changeMapPosition, changeMapStyle, changeMapZoom } = useMap();

  const username = import.meta.env.VITE_MAPBOX_USERNAME;
  const styleId = import.meta.env.VITE_MAPBOX_STYLE_ID;

  const mapStyleURL = `mapbox://styles/${username}/${styleId}`;

  useEffect(() => {
    changeMapPosition(41.481378, -71.3103165);
    changeMapZoom(14.5);
    changeMapStyle(mapStyleURL);
  }, []);

  return (
    <Section paddingBlock={0}>
      <Section.Container>
        <Section.Wrapper $grid={true}>
          <Styles.ButtonWrapper>
            <Button direction="left" as={Link} href="/">
              Back to Home
            </Button>
          </Styles.ButtonWrapper>
        </Section.Wrapper>
      </Section.Container>

      <MapContainer />
    </Section>
  );
}

export default Map;
