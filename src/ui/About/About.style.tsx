import styled, { css } from 'styled-components';

export const Article = styled.article<{ $black?: boolean }>`
  ${({ $black }) =>
    $black
      ? css`
          background-color: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: 3rem 1.5rem;

          ::selection {
            background-color: var(--color-brand-400);
            color: var(--color-neutral-900);
          }

          @media (min-width: 40em) {
            padding: 2rem 1.75rem;
          }

          @media (min-width: 60em) {
            padding: 3rem;
          }
        `
      : css`
          background-color: var(--color-neutral-100);
          color: var(--color-neutral-900);
          padding-block: 1rem;
        `};

  & > * {
    color: inherit;
  }

  & > :not(:first-child) {
    margin-top: 1.5rem;

    @media (min-width: 60em) {
      margin-top: 2rem;
    }
  }
`;

Article.defaultProps = {
  $black: false,
};

export const Grid = styled.div`
  display: grid;
  grid-template-columns: inherit;
  column-gap: inherit;

  row-gap: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 40em) {
    grid-template-rows:
      minmax(min-content, 25rem)
      minmax(min-content, 19.5625rem)
      minmax(min-content, 23.5625rem);
    row-gap: 0.625rem;

    article {
      display: grid;
      place-content: center;
      height: 100%;
    }

    & > :nth-child(1) {
      grid-area: 1 / 6 / span 1 / span 7;
    }
    & > :nth-child(2) {
      grid-area: 1 / 1 / span 1 / span 4;
    }
    & > :nth-child(3) {
      grid-area: 2 / 1 / span 2 / span 7;
    }
    & > :nth-child(4) {
      grid-area: 2 / 8 / span 1 / span 5;
    }
    & > :nth-child(5) {
      grid-area: 3 / 8 / span 1 / span 5;
    }
  }

  @media (min-width: 60em) {
    row-gap: 1.875rem;

    & > :nth-child(1) {
      grid-area: 1 / 6 / span 1 / span 7;
    }
    & > :nth-child(2) {
      grid-area: 1 / 1 / span 1 / span 4;
    }
    & > :nth-child(3) {
      grid-area: 2 / 1 / span 2 / span 7;
    }
    & > :nth-child(4) {
      grid-area: 2 / 8 / span 1 / span 5;
    }
    & > :nth-child(5) {
      grid-area: 3 / 8 / span 1 / span 5;
    }
  }
`;
