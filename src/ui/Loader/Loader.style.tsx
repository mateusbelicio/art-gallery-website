import styled, { keyframes } from 'styled-components';

const move1 = keyframes`
  0%  { transform: scaleX(1)  rotate(0deg) }
  50% { transform: scaleX(-1) rotate(-90deg) }
`;

const move2 = keyframes`
  49.99% {
    transform: scale(var(--scale, 1)) perspective(9.375rem) rotateX(-90deg) ; 
    filter: grayscale(0)
  }
  50% {
    transform: scale(var(--scale, 1)) perspective(9.375rem) rotateX(-90deg) ; 
    filter: grayscale(0.8)
  }
  100% {
    transform: scale(var(--scale, 1)) perspective(9.375rem) rotateX(-180deg); 
    filter: grayscale(0.8)
  }
`;

export const Container = styled.div`
  position: absolute;
  inset: 0;
  z-index: 100;

  display: grid;
  place-items: end;
  padding: 1.5rem;
`;

export const ContainerFull = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: rgb(var(--rgb-neutral-100) / 0.25);
  backdrop-filter: blur(8px);

  display: grid;
  place-items: center;
  padding: 1.5rem;
`;

export const IconAnimated = styled.div`
  width: 3.75rem;
  aspect-ratio: 1;
  color: var(--color-brand-400);
  background: linear-gradient(currentColor 0 0), linear-gradient(currentColor 0 0);
  background-position: 100% 0, 0 100%;
  background-size: 50.1% 50.1%;
  background-repeat: no-repeat;
  position: relative;
  animation: ${move1} 1s infinite steps(1);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0 50% 50% 0;
    background: currentColor;
    transform: scale(var(--scale, 1)) perspective(9.375rem) rotateY(0deg);
    transform-origin: bottom right;
    animation: ${move2} 0.5s infinite linear alternate;
  }

  &::after {
    --scale: -1, -1;
  }
`;
