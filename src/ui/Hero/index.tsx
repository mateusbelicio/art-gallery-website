import { Link } from 'react-router-dom';

import Section from '../Section';
import Paragraph from '../Paragraph';
import Heading from '../Heading';
import Button from '../Button';
import Image from '../Image';

import { HeroWrapper, HeroImage, HeroContent } from './Hero.style';

import heroImageMobile from '@/assets/mobile/image-hero.jpg';
import heroImageMobile2x from '@/assets/mobile/image-hero@2x.jpg';
import heroImageTablet from '@/assets/tablet/image-hero.jpg';
import heroImageTablet2x from '@/assets/tablet/image-hero@2x.jpg';
import heroImageDesktop from '@/assets/desktop/image-hero.jpg';
import heroImageDesktop2x from '@/assets/desktop/image-hero@2x.jpg';

function Hero() {
  return (
    <Section paddingBlock={0}>
      <Section.Container>
        <HeroWrapper $grid>
          <HeroImage>
            <Image
              srcFallback={heroImageMobile}
              alt="Two people looking at a photograph of an old lady in an art gallery"
              srcSet={[
                {
                  device: 'desktop',
                  src: heroImageDesktop,
                  srcDensity: heroImageDesktop2x,
                  type: 'image/jpeg',
                },
                {
                  device: 'tablet',
                  src: heroImageTablet,
                  srcDensity: heroImageTablet2x,
                  type: 'image/jpeg',
                },
                {
                  device: 'mobile',
                  src: heroImageMobile,
                  srcDensity: heroImageMobile2x,
                  type: 'image/jpeg',
                },
              ]}
            />
          </HeroImage>

          <HeroContent>
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
          </HeroContent>
        </HeroWrapper>
      </Section.Container>
    </Section>
  );
}

export default Hero;
