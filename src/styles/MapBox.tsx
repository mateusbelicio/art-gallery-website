import { css } from 'styled-components';

export const MapBox = css`
  .mapboxgl-popup-content {
    border-radius: 0.25rem;
    padding-inline: 1rem 1.5rem;
    font-family: var(--ff-body);
    background-color: var(--color-neutral-100);
    color: var(--color-neutral-400);

    h4 {
      color: var(--color-brand-400);
      font-size: var(--fs-200);
      margin-bottom: 0.5rem;
    }
  }

  .mapboxgl-popup-close-button {
    top: 0.25rem;
    right: 0.25rem;
    font-size: var(--fs-200);

    &:focus-visible {
      outline: 2px solid var(--color-brand-400);
    }

    &:hover {
      background-color: transparent;
      color: var(--color-brand-400);
    }
  }

  .mapboxgl-marker {
    cursor: pointer;
  }
`;
