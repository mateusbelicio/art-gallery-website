// import React from 'react';
import Paragraph from '../Paragraph';
import Section from '../Section';
import Social from '../Social';

import * as Styles from './Footer.style';

import logoLight from '@/assets/logo-light.svg';
import logoDark from '@/assets/logo-dark.svg';
import Heading from '../Heading';

interface FooterProps {
  colorDark?: boolean;
}

function Footer({ colorDark = false }: FooterProps) {
  const logo = colorDark ? logoLight : logoDark;

  return (
    <Styles.Footer $colorDark={colorDark}>
      <Section
        paddingBlock={48}
        paddingBlockMedia={{ tablet: 56, desktop: 80 }}
        color={colorDark ? 'neutral-100' : 'neutral-900'}
        backgroundColor={colorDark ? 'neutral-900' : 'brand-400'}
      >
        <Section.Container>
          <Styles.Wrapper>
            <Styles.Content>
              <Heading as="h4" size="md" className="sr-only">
                Footer
              </Heading>
              <Styles.Logo to="/#">
                <img src={logo} alt="Art Gallery logo" />
              </Styles.Logo>

              <Paragraph size="small" color={`neutral-${colorDark ? '100' : '900'}`}>
                The Modern Art Gallery is free to all visitors and open seven days a week from 8am
                to 9pm. Find us at 99 King Street, Newport, USA.
              </Paragraph>
            </Styles.Content>

            <Social />
          </Styles.Wrapper>
        </Section.Container>
      </Section>
    </Styles.Footer>
  );
}

export default Footer;
