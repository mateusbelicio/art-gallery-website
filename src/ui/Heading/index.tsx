import { WebTarget } from 'styled-components';
import { HTMLAttributes, ReactNode } from 'react';

import StyledHeading from './Heading.style';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  as?: void | WebTarget | undefined;
  transform?: 'uppercase' | 'capitalize' | 'lowercase' | 'none';
  children?: ReactNode;
}

function Heading({ size, color, transform, children, as, ...rest }: HeadingProps): ReactNode {
  return (
    <StyledHeading as={as} $size={size} $color={color} $transform={transform} {...rest}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
