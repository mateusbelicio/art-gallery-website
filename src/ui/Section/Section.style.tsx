import styled, { css } from 'styled-components';

type Padding = number | number[];
interface SectionProps {
  $paddingBlock: Padding;
  $paddingBlockMedia?: { tablet?: Padding; desktop?: Padding };
  $color?: string;
  $backgroundColor?: string;
}

const StyledSection = styled.section<SectionProps>`
  position: relative;
  width: 100%;

  ${({ $color }) =>
    $color &&
    css`
      color: ${`var(--color-${$color})`};
    `};
  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${`var(--color-${$backgroundColor})`};
    `};

  padding-block: ${({ $paddingBlock }) => {
    if (typeof $paddingBlock === 'number') return `${$paddingBlock / 16}rem`;

    const [padTop, padBottom] = $paddingBlock;
    return `${padTop / 16}rem ${padBottom / 16}rem`;
  }};

  ${({ $paddingBlockMedia }) => {
    if (!$paddingBlockMedia) return;

    if ($paddingBlockMedia.tablet)
      return css`
        @media (min-width: 40em) {
          padding-block: ${() => {
            if (typeof $paddingBlockMedia.tablet === 'number')
              return `${$paddingBlockMedia.tablet / 16}rem`;

            if (typeof $paddingBlockMedia.tablet === 'object') {
              const [padTop, padBottom] = $paddingBlockMedia.tablet;
              return `${padTop / 16}rem ${padBottom / 16}rem`;
            }
          }};
        }
      `;
  }}

  ${({ $paddingBlockMedia }) => {
    if (!$paddingBlockMedia) return;

    if ($paddingBlockMedia.desktop)
      return css`
        @media (min-width: 60em) {
          padding-block: ${() => {
            if (typeof $paddingBlockMedia.desktop === 'number')
              return `${$paddingBlockMedia.desktop / 16}rem`;

            if (typeof $paddingBlockMedia.desktop === 'object') {
              const [padTop, padBottom] = $paddingBlockMedia.desktop;
              return `${padTop / 16}rem ${padBottom / 16}rem`;
            }
          }};
        }
      `;
  }}
`;

const MARGIN_MOBILE = 16;
const MARGIN_TABLET = 40;
const DEFAULT_MAX_WIDTH = 1110;

export const Container = styled.div<{ $maxWidth?: number }>`
  max-width: ${({ $maxWidth }) =>
    $maxWidth ? `${$maxWidth / 16}rem` : `${DEFAULT_MAX_WIDTH / 16}rem`};
  margin-inline: ${`${MARGIN_MOBILE / 16}rem`};

  @media (min-width: 40em) {
    margin-inline: ${`${MARGIN_TABLET / 16}rem`};
  }

  ${({ $maxWidth }) => css`
    @media (min-width: ${$maxWidth
        ? `${($maxWidth + 2 * MARGIN_TABLET) / 16}rem`
        : `${(DEFAULT_MAX_WIDTH + 2 * MARGIN_TABLET) / 16}rem`}) {
      margin-inline: auto;
    }
  `};
`;

export const Wrapper = styled.div<{ $grid?: boolean }>`
  ${({ $grid }) =>
    $grid &&
    css`
      display: grid;
      grid-template-columns: [full-start] 1fr [full-end];

      & > * {
        grid-column: full;
      }

      @media (min-width: 40em) {
        grid-template-columns: [full-start] repeat(12, 1fr) [full-end];
        column-gap: 0.625rem;
      }
      @media (min-width: 60em) {
        column-gap: 1.875rem;
      }
    `}
`;

export default StyledSection;
