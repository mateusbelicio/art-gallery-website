import styled from 'styled-components';

export const MapContainer = styled.div`
  height: 34.375rem;
  background-color: var(--color-neutral-400);

  @media (min-width: 40em) {
    height: 37.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  justify-self: start;
  position: absolute;
  left: 0;

  @media (min-width: 40em) {
    left: initial;
  }
`;
