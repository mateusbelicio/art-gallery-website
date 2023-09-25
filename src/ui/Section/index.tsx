import { HTMLAttributes, ReactNode } from 'react';

import StyledSection, { Container, Wrapper } from './Section.style';

type Padding = number | number[];

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  paddingBlock: Padding;
  paddingBlockMedia?: { tablet?: Padding; desktop?: Padding };
  color?: string;
  backgroundColor?: string;
  overflow?: 'hidden' | 'scroll' | 'visible';
  children?: ReactNode;
  rest?: HTMLAttributes<HTMLDivElement>;
}

function Section({
  paddingBlock,
  paddingBlockMedia,
  color,
  backgroundColor,
  overflow,
  children,
  ...rest
}: SectionProps): ReactNode {
  return (
    <StyledSection
      $paddingBlock={paddingBlock}
      $paddingBlockMedia={paddingBlockMedia}
      $color={color}
      $backgroundColor={backgroundColor}
      $overflow={overflow}
      {...rest}
    >
      {children}
    </StyledSection>
  );
}

Section.Container = Container;
Section.Wrapper = Wrapper;

export default Section;
