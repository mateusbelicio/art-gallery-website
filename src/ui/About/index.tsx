import Heading from '../Heading';
import Image from '../Image';
import Paragraph from '../Paragraph';
import Section from '../Section';

import * as Styles from './About.style';

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
              srcFallback="/src/assets/mobile/image-grid-1.jpg"
              alt="Art gallery image 1"
              srcSet={[
                {
                  device: 'tablet',
                  type: 'image/webp',
                  src: '/src/assets/desktop/image-grid-1.webp',
                  srcDensity: '/src/assets/desktop/image-grid-1@2x.webp',
                },
                {
                  device: 'mobile',
                  type: 'image/webp',
                  src: '/src/assets/mobile/image-grid-1.webp',
                  srcDensity: '/src/assets/mobile/image-grid-1@2x.webp',
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
              srcFallback="/src/assets/mobile/image-grid-2.jpg"
              alt="Art gallery image 2"
              srcSet={[
                {
                  device: 'tablet',
                  type: 'image/webp',
                  src: '/src/assets/desktop/image-grid-2.webp',
                  srcDensity: '/src/assets/desktop/image-grid-2@2x.webp',
                },
                {
                  device: 'mobile',
                  type: 'image/webp',
                  src: '/src/assets/mobile/image-grid-2.webp',
                  srcDensity: '/src/assets/mobile/image-grid-2@2x.webp',
                },
              ]}
            />

            <Image
              srcFallback="/src/assets/mobile/image-grid-3.jpg"
              alt="Art gallery image 3"
              srcSet={[
                {
                  device: 'tablet',
                  type: 'image/webp',
                  src: '/src/assets/desktop/image-grid-3.webp',
                  srcDensity: '/src/assets/desktop/image-grid-3@2x.webp',
                },
                {
                  device: 'mobile',
                  type: 'image/webp',
                  src: '/src/assets/mobile/image-grid-3.webp',
                  srcDensity: '/src/assets/mobile/image-grid-3@2x.webp',
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
