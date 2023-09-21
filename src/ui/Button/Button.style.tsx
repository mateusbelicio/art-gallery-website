import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  line-height: var(--lh-none);
  font-size: 1.25rem;
  font-family: var(--ff-heading);
  font-weight: 800;
  letter-spacing: 3.64px;
  text-transform: uppercase;

  &:focus-visible {
    outline: 3px solid var(--color-brand-400);
    outline-offset: 3px;
  }

  .wrapper {
    display: flex;
    overflow: hidden;

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1.5rem 2rem;
      line-height: 1;
      background: linear-gradient(
        to right,
        var(--color-neutral-900) 33%,
        var(--color-brand-400) 34%,
        var(--color-brand-400) 66%,
        var(--color-neutral-900) 67%,
        var(--color-neutral-900) 100%
      );
      background-size: 333%;
      background-position-x: 0%;
      color: var(--color-neutral-100);
      white-space: nowrap;

      &.icon {
        padding: 1.5rem;
        background-position-x: 50%;
      }
    }
  }
`;

export default StyledButton;
