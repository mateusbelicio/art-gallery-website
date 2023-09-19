import { WebTarget } from 'styled-components';
import { ReactNode } from 'react';

import StyledHeading from './Heading.style';

interface HeadingProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  as?: void | WebTarget | undefined;
  children: string | ReactNode;
}

function Heading({ size, color, children, as, ...rest }: HeadingProps) {
  return (
    <StyledHeading as={as} $size={size} $color={color} {...rest}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
