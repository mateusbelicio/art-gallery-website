import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.25rem;
`;

export const SocialLink = styled.a`
  transition: color 300ms;
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;

  &:hover {
    color: var(--color-hover);
  }

  &:focus-visible {
    outline: 3px solid var(--color-hover);
    outline-offset: 3px;
  }
`;
