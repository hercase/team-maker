import styled, { css } from "styled-components";

const size = 19;

export const StyledLabel = styled.label`
  margin: 0;
  cursor: pointer;
  border-radius: 10%;
  width: ${size}px;
  height: ${size}px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  ${({ hidden }) =>
    hidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `}

  & * {
    cursor: pointer;
  }

  & input {
    height: ${size}px;
    width: ${size}px;

    &:checked {
      display: none;
    }
  }

  input:checked + span:after {
    display: block;
    background: var(--primary);
    height: ${size}px;
    width: ${size}px;
    content: "\\2714";
    top: -2px;
    text-align: center;
    border-radius: 10%;
    color: #ffff;
    border: none;
  }
`;
