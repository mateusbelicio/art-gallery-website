import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  padding-block: 8rem;
  min-height: 100vh;
`;

export const Message = styled.div`
  text-align: center;

  & > *:not(:first-child) {
    margin-top: 0.75em;
  }
`;

export const ButtonWrapper = styled.div`
  justify-self: start;
  position: absolute;
  left: 0;
  z-index: 50;

  @media (min-width: 40em) {
    left: initial;
  }
`;
