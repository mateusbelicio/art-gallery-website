import React from 'react';

import Section from '../Section';
import Heading from '../Heading';
import Paragraph from '../Paragraph';

import * as Styles from './OurLocation.style';

function OurLocation(): React.JSX.Element {
  return (
    <Section
      paddingBlock={[48, 56]}
      paddingBlockMedia={{ tablet: [88, 80], desktop: [104, 128] }}
      backgroundColor="neutral-900"
    >
      <Section.Container>
        <Section.Wrapper $grid={true}>
          <Styles.Content>
            <Heading size="lg" as="h1" color="neutral-100" transform="uppercase">
              Our Location
            </Heading>

            <Styles.Address>
              <Heading size="sm" as="h2" color="brand-400" transform="uppercase">
                99 king street
              </Heading>

              <Paragraph size="base" color="neutral-100">
                Newport <br /> RI 02840 <br /> United States of America
              </Paragraph>

              <Paragraph size="base" color="neutral-100">
                Our newly opened gallery is located near the Edward King House on 99 King Street,
                the Modern Art Gallery is free to all visitors and open seven days a week from 8am
                to 9pm.
              </Paragraph>
            </Styles.Address>
          </Styles.Content>
        </Section.Wrapper>
      </Section.Container>
    </Section>
  );
}

export default OurLocation;
