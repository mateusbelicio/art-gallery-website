import Heading from '../Heading';
import Image from '../Image';
import Paragraph from '../Paragraph';
import Section from '../Section';

import * as Styles from './About.style';

import mobileImageGrid_1_JPG from '@/assets/mobile/image-grid-1.jpg';
import mobileImageGrid_1_WEBP from '@/assets/mobile/image-grid-1.webp';
import mobileImageGrid_1_2xWEBP from '@/assets/mobile/image-grid-1@2x.webp';
import desktopImageGrid_1_WEBP from '@/assets/desktop/image-grid-1.webp';
import desktopImageGrid_1_2xWEBP from '@/assets/desktop/image-grid-1@2x.webp';

import mobileImageGrid_2_JPG from '@/assets/mobile/image-grid-2.jpg';
import mobileImageGrid_2_WEBP from '@/assets/mobile/image-grid-2.webp';
import mobileImageGrid_2_2xWEBP from '@/assets/mobile/image-grid-2@2x.webp';
import desktopImageGrid_2_WEBP from '@/assets/desktop/image-grid-2.webp';
import desktopImageGrid_2_2xWEBP from '@/assets/desktop/image-grid-2@2x.webp';

import mobileImageGrid_3_JPG from '@/assets/mobile/image-grid-3.jpg';
import mobileImageGrid_3_WEBP from '@/assets/mobile/image-grid-3.webp';
import mobileImageGrid_3_2xWEBP from '@/assets/mobile/image-grid-3@2x.webp';
import desktopImageGrid_3_WEBP from '@/assets/desktop/image-grid-3.webp';
import desktopImageGrid_3_2xWEBP from '@/assets/desktop/image-grid-3@2x.webp';

function About() {
  return (
    <Section paddingBlock={120} paddingBlockMedia={{ desktop: 180 }}>
      <Section.Container>
        <Section.Wrapper $grid>
          <Heading as="h2" size="lg" className="sr-only">
            About
          </Heading>

          <Styles.Grid>
            <Image
              srcFallback={mobileImageGrid_1_JPG}
              alt="Art gallery image 1"
              srcSet={[
                {
                  device: 'tablet',
                  type: 'image/webp',
                  src: desktopImageGrid_1_WEBP,
                  srcDensity: desktopImageGrid_1_2xWEBP,
                },
                {
                  device: 'mobile',
                  type: 'image/webp',
                  src: mobileImageGrid_1_WEBP,
                  srcDensity: mobileImageGrid_1_2xWEBP,
                },
              ]}
            />

            <Styles.Article>
              <Heading as="h3" size="md" transform="uppercase">
                Your day at the gallery
              </Heading>

              <Paragraph size="base">
                Wander through our distinct collections and find new insights about our artists.
                Dive into the details of their creative process.
              </Paragraph>
            </Styles.Article>

            <Image
              srcFallback={mobileImageGrid_2_JPG}
              alt="Art gallery image 2"
              srcSet={[
                {
                  device: 'tablet',
                  type: 'image/webp',
                  src: desktopImageGrid_2_WEBP,
                  srcDensity: desktopImageGrid_2_2xWEBP,
                },
                {
                  device: 'mobile',
                  type: 'image/webp',
                  src: mobileImageGrid_2_WEBP,
                  srcDensity: mobileImageGrid_2_2xWEBP,
                },
              ]}
            />

            <Image
              srcFallback={mobileImageGrid_3_JPG}
              alt="Art gallery image 3"
              srcSet={[
                {
                  device: 'tablet',
                  type: 'image/webp',
                  src: desktopImageGrid_3_WEBP,
                  srcDensity: desktopImageGrid_3_2xWEBP,
                },
                {
                  device: 'mobile',
                  type: 'image/webp',
                  src: mobileImageGrid_3_WEBP,
                  srcDensity: mobileImageGrid_3_2xWEBP,
                },
              ]}
            />

            <Styles.Article $black={true}>
              <Heading as="h3" size="md" transform="uppercase">
                Come &amp; be inspired
              </Heading>

              <Paragraph size="base">
                We’re excited to welcome you to our gallery and see how our collections influence
                you.
              </Paragraph>
            </Styles.Article>
          </Styles.Grid>
        </Section.Wrapper>
      </Section.Container>
    </Section>
  );
}

export default About;
