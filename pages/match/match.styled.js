import styled from "styled-components";

export const StyledMatch = styled.div`
  & .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  & .header {
    display: flex;
    border-radius: var(--radius);
    overflow: hidden;

    & .icon {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      background-color: var(--primary);
      color: var(--headline);
      width: 4rem;
    }

    & .data {
      flex: 1;
      background-color: white;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding: 0.5rem 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    & .title {
      color: var(--secondary);
      font-weight: 600;
    }

    & .subtitle {
      font-weight: 500;
    }
  }
`;
