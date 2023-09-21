import { Link } from 'react-router-dom';

import Section from '../Section';
import Paragraph from '../Paragraph';
import Heading from '../Heading';
import Button from '../Button';
import Image from '../Image';

import * as Styles from './Hero.style';

import heroImageFallback from '@/assets/mobile/image-hero.jpg';
import heroImageMobile from '@/assets/mobile/image-hero.webp';
import heroImageMobile2x from '@/assets/mobile/image-hero@2x.webp';
import heroImageTablet from '@/assets/tablet/image-hero.webp';
import heroImageTablet2x from '@/assets/tablet/image-hero@2x.webp';
import heroImageDesktop from '@/assets/desktop/image-hero.webp';
import heroImageDesktop2x from '@/assets/desktop/image-hero@2x.webp';

function Hero() {
  return (
    <Section paddingBlock={0}>
      <Section.Container>
        <Styles.Wrapper $grid>
          <Styles.Image>
            <Image
              srcFallback={heroImageFallback}
              alt="Two people looking at a photograph of an old lady in an art gallery"
              srcSet={[
                {
                  device: 'desktop',
                  src: heroImageDesktop,
                  srcDensity: heroImageDesktop2x,
                  type: 'image/webp',
                },
                {
                  device: 'tablet',
                  src: heroImageTablet,
                  srcDensity: heroImageTablet2x,
                  type: 'image/webp',
                },
                {
                  device: 'mobile',
                  src: heroImageMobile,
                  srcDensity: heroImageMobile2x,
                  type: 'image/webp',
                },
              ]}
            />
          </Styles.Image>

          <Styles.Content>
            <Heading as="h1" size="xl" transform="uppercase">
              Modern <br /> Art Gallery
            </Heading>

            <div>
              <Paragraph size="base">
                The arts in the collection of the Modern Art Gallery all started from a spark of
                inspiration. Will these pieces inspire you? Visit us and find out.
              </Paragraph>

              <Button direction="right" as={Link} href="/location">
                Our location
              </Button>
            </div>
          </Styles.Content>
        </Styles.Wrapper>
      </Section.Container>
    </Section>
  );
}

export default Hero;
