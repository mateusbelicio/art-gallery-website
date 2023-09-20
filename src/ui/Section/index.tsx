import { ReactNode } from 'react';

import StyledSection, { Container, Wrapper } from './Section.style';

type Padding = number | number[];

interface SectionProps {
  paddingBlock: Padding;
  paddingBlockMedia?: { tablet?: Padding; desktop?: Padding };
  color?: string;
  children: ReactNode;
}

function Section({ paddingBlock, paddingBlockMedia, color, children }: SectionProps) {
  return (
    <StyledSection
      $paddingBlock={paddingBlock}
      $paddingBlockMedia={paddingBlockMedia}
      $color={color}
    >
      {children}
    </StyledSection>
  );
}

Section.Container = Container;
Section.Wrapper = Wrapper;

export default Section;
