import styled from "styled-components";

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  max-width: 1200px;
  margin: 0 auto;
  width: 95vw;

  .link {
    cursor: pointer;
  }
`;
