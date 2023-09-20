import { Link } from 'react-router-dom';

import Section from '../Section';
import Paragraph from '../Paragraph';
import Heading from '../Heading';
import Button from '../Button';

import { HeroWrapper, HeroImage, HeroContent } from './Hero.style';

import heroImageMobile from '@/assets/mobile/image-hero.jpg';
import heroImageTablet from '@/assets/tablet/image-hero.jpg';
import heroImageDesktop from '@/assets/desktop/image-hero.jpg';

function Hero() {
  return (
    <Section paddingBlock={0}>
      <Section.Container>
        <HeroWrapper $grid>
          <HeroImage>
            <source media="(min-width: 60em)" srcSet={heroImageDesktop} />
            <source media="(min-width: 40em)" srcSet={heroImageTablet} />
            <img src={heroImageMobile} alt="" />
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
