import styled from 'styled-components';

export const MapBox = styled.div`
  display: grid;
  height: 34.375rem;
  background-color: var(--color-neutral-300);
  overflow: hidden;

  @media (min-width: 40em) {
    height: 37.5rem;
  }
`;

export const MapContainer = styled.div<{ $isLoading: boolean }>`
  height: 100%;
  width: 100%;
  visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};

  grid-column: 1;
  grid-row: 1;
`;

export const MapStatic = styled.div<{ $url: string }>`
  background-image: url(${({ $url }) => $url});
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;

  grid-column: 1;
  grid-row: 1;
`;

export const ButtonWrapper = styled.div`
  justify-self: start;
  position: absolute;
  left: 0;
  z-index: 50;

  @media (min-width: 40em) {
    left: initial;
  }
`;
