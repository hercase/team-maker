import styled from "styled-components";

export const StyledColorPicker = styled.label`
  display: block;
  position: relative;
  width: fit-content;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;
