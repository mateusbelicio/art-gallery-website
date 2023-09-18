import { css } from 'styled-components';

export const Colors = css`
  :root {
    --rgb-brand-400: 213 150 108;

    --rgb-neutral-100: 255 255 255;
    --rgb-neutral-400: 68 68 68;
    --rgb-neutral-900: 21 21 21;
  }

  :root {
    --color-brand-400: rgb(var(--rgb-brand-400));

    --color-neutral-100: rgb(var(--rgb-neutral-100));
    --color-neutral-400: rgb(var(--rgb-neutral-400));
    --color-neutral-900: rgb(var(--rgb-neutral-900));
  }
`;
