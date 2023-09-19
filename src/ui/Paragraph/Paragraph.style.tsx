import { styled, css } from 'styled-components';

const sizes = {
  small: css`
    font-size: var(--fs-100);
    line-height: var(--lh-normal);

    @media (min-width: 60em) {
      font-size: var(--fs-200);
      line-height: var(--lh-medium);
    }
  `,
  base: css`
    font-size: var(--fs-200);
    line-height: var(--lh-medium);

    @media (min-width: 60em) {
      font-size: var(--fs-300);
      line-height: var(--lh-large);
    }
  `,
};

const StyledParagraph = styled.p<{ $size: 'small' | 'base'; $color?: string }>`
  font-family: var(--ff-body);
  font-weight: 300;

  color: ${({ $color }) => ($color ? `var(--color-${$color})` : 'var(--color-neutral-400)')};
  ${({ $size }) => sizes[$size]}
`;

export default StyledParagraph;
