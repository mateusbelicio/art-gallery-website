import styled from 'styled-components';
import Section from '../Section';

const HERO_IMAGE_MOBILE = { maxWidth: 'none', maxHeight: 240 };
const HERO_IMAGE_TABLET = { maxWidth: 'none', maxHeight: 700 };
const HERO_IMAGE_DESKTOP = { maxWidth: 540, maxHeight: 800 };

export const HeroWrapper = styled(Section.Wrapper)`
  row-gap: 2rem;
`;

export const HeroImage = styled.picture`
  height: ${`${HERO_IMAGE_MOBILE.maxHeight / 16}rem`};
  background-color: #fff;

  img {
    position: absolute;
    inset-inline: 0;

    width: 100%;
    height: 100%;
    max-height: ${`${HERO_IMAGE_MOBILE.maxHeight / 16}rem`};
    max-width: ${HERO_IMAGE_MOBILE.maxWidth};
    object-fit: cover;
    object-position: bottom;
  }

  @media (min-width: 40em) {
    grid-column-end: 8;
    grid-row: 1;
    height: ${`${HERO_IMAGE_TABLET.maxHeight / 16}rem`};

    position: relative;
    z-index: -1;

    img {
      inset-inline: initial;
      right: 0;
      width: calc(100% + 2.5rem);
      max-height: ${`${HERO_IMAGE_TABLET.maxHeight / 16}rem`};
    }
  }

  @media (min-width: 60em) {
    height: ${`${HERO_IMAGE_DESKTOP.maxHeight / 16}rem`};
    grid-column: 4 / -4;
    background-color: var(--color-neutral-100);

    img {
      max-height: ${`${HERO_IMAGE_DESKTOP.maxHeight / 16}rem`};
      max-width: ${`${HERO_IMAGE_DESKTOP.maxWidth / 16}rem`};
      width: 100%;
    }
  }
`;

export const HeroContent = styled.div`
  display: grid;
  row-gap: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: inherit;
    justify-content: start;
    align-items: start;
  }

  @media (min-width: 40em) {
    grid-column-start: 7;
    row-gap: 3rem;

    grid-row: 1;
    align-self: center;
  }

  @media (min-width: 60em) {
    grid-column-start: 1;
    grid-template-columns: inherit;
    column-gap: inherit;
    align-self: start;
    padding-top: ${`${190 / 16}rem`};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 50%;
      width: 50%;
      height: 100%;
      background-color: var(--color-neutral-900);
      z-index: -20;
    }

    h1 {
      grid-column: span 6;
      mix-blend-mode: difference;
      color: var(--color-neutral-100);
      white-space: nowrap;
    }

    & > div {
      grid-column: 9 / -1;
      gap: 4rem;
      max-width: 21.875rem;
    }
  }
`;
