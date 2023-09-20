import { ReactNode, useState } from 'react';
import { WebTarget } from 'styled-components';
import { motion, Variants } from 'framer-motion';

import Icon from '../Icon';
import StyledButton from './Button.style';

interface ButtonProps {
  children: ReactNode;
  direction: 'left' | 'right';
  as?: void | WebTarget | undefined;
  href?: string;
}

const variationLeftToRight: Variants = {
  initialBlack: { backgroundPositionX: '100%' },
  initialBrand: { backgroundPositionX: '50%' },
  hoverBlack: { backgroundPositionX: '50%' },
  hoverBrand: { backgroundPositionX: '0%' },
};

const variationRightToLeft: Variants = {
  initialBlack: { backgroundPositionX: '0%' },
  initialBrand: { backgroundPositionX: '50%' },
  hoverBlack: { backgroundPositionX: '50%' },
  hoverBrand: { backgroundPositionX: '100%' },
};

function Button({ direction, as, href, children }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const linkProps: object = as ? { to: href } : {};

  return (
    <StyledButton as={as} {...linkProps}>
      <motion.span
        className="wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {direction === 'left' && (
          <motion.span
            className="icon"
            initial="initialBrand"
            animate={isHovered ? 'hoverBrand' : 'initialBrand'}
            variants={variationRightToLeft}
          >
            <Icon name="arrow-left" width={8} height={24} />
          </motion.span>
        )}
        <motion.span
          initial="initialBlack"
          animate={isHovered ? 'hoverBlack' : 'initialBlack'}
          variants={direction === 'left' ? variationRightToLeft : variationLeftToRight}
        >
          {children}
        </motion.span>
        {direction === 'right' && (
          <motion.span
            className="icon"
            initial="initialBrand"
            animate={isHovered ? 'hoverBrand' : 'initialBrand'}
            variants={variationLeftToRight}
          >
            <Icon name="arrow-right" width={8} height={24} />
          </motion.span>
        )}
      </motion.span>
    </StyledButton>
  );
}

export default Button;
