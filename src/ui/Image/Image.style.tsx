import styled from 'styled-components';

export const StyledImage = styled.picture<{ $isLoading: boolean }>`
  height: 100%;
  user-select: none;
  overflow: hidden;
`;
