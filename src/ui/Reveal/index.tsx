import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  htmlElement?: 'div' | 'span';
}

const parent: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.35,
      delayChildren: 0.35,
    },
  },
};

const child: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function Child({ children, htmlElement = 'div' }: RevealProps) {
  const MotionComponent = motion[htmlElement];

  return <MotionComponent variants={child}>{children}</MotionComponent>;
}

function Reveal({ children, htmlElement = 'div' }: RevealProps) {
  const MotionComponent = motion[htmlElement];

  const ref = useRef(null);
  const isInView = useInView(ref);
  const [animate, setAnimate] = useState<'hidden' | 'show'>('hidden');

  useEffect(() => {
    if (isInView) setAnimate('show');
  }, [isInView]);

  return (
    <MotionComponent ref={ref} variants={parent} initial="hidden" animate={animate}>
      {children}
    </MotionComponent>
  );
}

Reveal.Child = Child;

export default Reveal;
