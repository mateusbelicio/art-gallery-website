import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: inherit;
  column-gap: inherit;
  row-gap: 3rem;

  ::selection {
    background-color: var(--color-brand-400);
    color: var(--color-neutral-900);
  }

  h1 {
    @media (min-width: 40em) {
      grid-column: 1 / span 4;
    }

    @media (min-width: 60em) {
      grid-column: 1 / span 3;
    }
  }
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-style: normal;

  max-width: 68ch;

  @media (min-width: 40em) {
    grid-column: 6 / full-end;
  }

  @media (min-width: 40em) {
    grid-column: 7 / full-end;
  }
`;
