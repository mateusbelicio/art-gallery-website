import { WebTarget } from 'styled-components';
import { ReactNode } from 'react';

import StyledParagraph from './Paragraph.style';

interface ParagraphProps {
  size: 'small' | 'base';
  color?: string;
  as?: void | WebTarget | undefined;
  children?: ReactNode;
}

function Paragraph({ size, children, color, as, ...rest }: ParagraphProps): ReactNode {
  return (
    <StyledParagraph as={as} $size={size} $color={color} {...rest}>
      {children}
    </StyledParagraph>
  );
}

export default Paragraph;
