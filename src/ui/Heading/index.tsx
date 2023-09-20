import { WebTarget } from 'styled-components';
import { ReactNode } from 'react';

import StyledHeading from './Heading.style';

interface HeadingProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  as?: void | WebTarget | undefined;
  transform?: 'uppercase' | 'capitalize' | 'lowercase' | 'none';
  children: string | ReactNode;
}

function Heading({ size, color, transform, children, as, ...rest }: HeadingProps) {
  return (
    <StyledHeading as={as} $size={size} $color={color} $transform={transform} {...rest}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
