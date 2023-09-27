import { Link } from 'react-router-dom';

import Section from '../Section';
import Paragraph from '../Paragraph';
import Heading from '../Heading';
import Button from '../Button';
import Image from '../Image';

import * as Styles from './Hero.style';

import mobileImageHeroJPG from '@/assets/mobile/image-hero.jpg';
import desktopImageHeroWEBP from '@/assets/desktop/image-hero.webp';
import desktopImageHero2xWEBP from '@/assets/desktop/image-hero@2x.webp';
import tabletImageHeroWEBP from '@/assets/tablet/image-hero.webp';
import tabletImageHero2xWEBP from '@/assets/tablet/image-hero@2x.webp';
import mobileImageHeroWEBP from '@/assets/mobile/image-hero.webp';
import mobileImageHero2xWEBP from '@/assets/mobile/image-hero@2x.webp';

function Hero() {
  return (
    <Section paddingBlock={0}>
      <Section.Container>
        <Styles.Wrapper $grid>
          <Styles.Image>
            <Image
              srcFallback={mobileImageHeroJPG}
              alt="Two people looking at a photograph of an old lady in an art gallery"
              lazy={false}
              srcSet={[
                {
                  device: 'desktop',
                  src: desktopImageHeroWEBP,
                  srcDensity: desktopImageHero2xWEBP,
                  type: 'image/webp',
                },
                {
                  device: 'tablet',
                  src: tabletImageHeroWEBP,
                  srcDensity: tabletImageHero2xWEBP,
                  type: 'image/webp',
                },
                {
                  device: 'mobile',
                  src: mobileImageHeroWEBP,
                  srcDensity: mobileImageHero2xWEBP,
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
