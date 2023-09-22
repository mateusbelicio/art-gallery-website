import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Footer = styled.footer<{ $colorDark: boolean }>`
  --color-hover: ${({ $colorDark }) =>
    $colorDark ? 'var(--color-brand-400)' : 'var(--color-neutral-100)'};

  ${({ $colorDark }) =>
    $colorDark &&
    css`
      ::selection {
        background-color: var(--color-brand-400);
        color: var(--color-neutral-900);
      }
    `}
`;

Footer.defaultProps = {
  $colorDark: false,
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.5rem;

  p {
    max-width: 36ch;
  }

  @media (min-width: 40em) {
    flex-direction: row;
    gap: 4rem;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  row-gap: 2.5rem;

  @media (min-width: 40em) {
    grid-template-columns: 8fr 4fr;
    gap: 1.875rem;
    justify-content: space-between;
    align-items: start;

    ul {
      justify-self: end;
    }
  }
`;

export const Logo = styled(Link)`
  flex-shrink: 0;

  &:focus-visible {
    outline: 3px solid var(--color-hover);
    outline-offset: 3px;
  }

  @media (min-width: 60em) {
    img {
      height: 3.625rem;
    }
  }
`;
