import styled from "styled-components";

export const StyledAlert = styled.div`
  align-items: center;
  background-color: var(--secondary);
  border-radius: 0.375rem;
  box-sizing: border-box;
  color: var(--headline);
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 100%;

  .text {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-right: 1rem;
  }
`;
