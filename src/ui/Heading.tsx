import { styled, css } from 'styled-components';

/**
|--------------------------------------------------
| STYLES
|--------------------------------------------------
*/
const sizes = {
  sm: css`
    font-size: var(--fs-400);
    line-height: var(--lh-none);

    @media (min-width: 60em) {
      font-size: var(--fs-500);
    }
  `,
  md: css`
    font-size: var(--fs-600);
    line-height: var(--lh-small);

    @media (min-width: 60em) {
      font-size: var(--fs-800);
      line-height: var(--lh-none);
    }
  `,
  lg: css`
    font-size: var(--fs-600);
    line-height: var(--lh-small);

    @media (min-width: 40em) {
      font-size: var(--fs-700);
    }

    @media (min-width: 60em) {
      font-size: var(--fs-900);
      line-height: var(--lh-none);
    }
  `,
  xl: css`
    font-size: var(--fs-800);
    line-height: var(--lh-small);

    @media (min-width: 40em) {
      font-size: var(--fs-900);
    }

    @media (min-width: 60em) {
      font-size: var(--fs-950);
      line-height: var(--lh-huge);
    }
  `,
};

const StyledHeading = styled.p<{ $size: 'sm' | 'md' | 'lg' | 'xl'; $color?: string }>`
  font-family: var(--ff-heading);
  font-weight: 900;

  color: ${({ $color }) => ($color ? `var(--color-${$color})` : 'var(--color-neutral-900)')};
  ${(props) => sizes[props.$size]}
`;

/**
|--------------------------------------------------
| STRUCTURE
|--------------------------------------------------
*/
interface HeadingProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  children: string;
}

function Heading({ size, color, children, ...rest }: HeadingProps) {
  return (
    <StyledHeading $size={size} $color={color} {...rest}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
