import Button from '@/ui/Button';
import Section from '@/ui/Section';
import React from 'react';
import { Link } from 'react-router-dom';

import * as Styles from './Map.style';

function Map(): React.JSX.Element {
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
      <Styles.MapContainer id="map"></Styles.MapContainer>
    </Section>
  );
}

export default Map;
