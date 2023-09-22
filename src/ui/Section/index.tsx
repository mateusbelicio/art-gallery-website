import { ReactNode } from 'react';

import StyledSection, { Container, Wrapper } from './Section.style';

type Padding = number | number[];

interface SectionProps {
  paddingBlock: Padding;
  paddingBlockMedia?: { tablet?: Padding; desktop?: Padding };
  color?: string;
  backgroundColor?: string;
  children?: ReactNode;
}

function Section({
  paddingBlock,
  paddingBlockMedia,
  color,
  backgroundColor,
  children,
}: SectionProps): ReactNode {
  return (
    <StyledSection
      $paddingBlock={paddingBlock}
      $paddingBlockMedia={paddingBlockMedia}
      $color={color}
      $backgroundColor={backgroundColor}
    >
      {children}
    </StyledSection>
  );
}

Section.Container = Container;
Section.Wrapper = Wrapper;

export default Section;
