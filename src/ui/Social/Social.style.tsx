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

  &:hover {
    color: var(--color-hover);
  }
`;
