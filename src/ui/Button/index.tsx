import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { WebTarget } from 'styled-components';
import { motion, Variants } from 'framer-motion';

import Icon from '../Icon';
import StyledButton from './Button.style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
  as?: void | WebTarget | undefined;
  href?: string;
  children?: ReactNode;
}

// Variants
const iconLeftToRigth: Variants = {
  initial: { backgroundPositionX: '50%' },
  hover: { backgroundPositionX: '0%' },
};

const iconRightToLeft: Variants = {
  initial: { backgroundPositionX: '50%' },
  hover: { backgroundPositionX: '100%' },
};

const textRightToLeft: Variants = {
  initial: { backgroundPositionX: '0%' },
  hover: { backgroundPositionX: '50%' },
};

const textLeftToRigth: Variants = {
  initial: { backgroundPositionX: '100%' },
  hover: { backgroundPositionX: '50%' },
};

// --------------------------------------------------
function Button({ direction, as, href, children }: ButtonProps): ReactNode {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const linkProps: object = as ? { to: href } : {};

  return (
    <StyledButton as={as} {...linkProps}>
      <span className="wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {direction === 'left' && (
          <motion.span
            className="icon"
            initial="initial"
            animate={isHovered ? 'hover' : 'initial'}
            variants={iconRightToLeft}
          >
            <Icon name="arrow-left" width={8} height={24} />
          </motion.span>
        )}
        <motion.span
          initial="initial"
          animate={isHovered ? 'hover' : 'initial'}
          variants={direction === 'left' ? textRightToLeft : textLeftToRigth}
        >
          {children}
        </motion.span>
        {direction === 'right' && (
          <motion.span
            className="icon"
            initial="initial"
            animate={isHovered ? 'hover' : 'initial'}
            variants={iconLeftToRigth}
          >
            <Icon name="arrow-right" width={8} height={24} />
          </motion.span>
        )}
      </span>
    </StyledButton>
  );
}

export default Button;
