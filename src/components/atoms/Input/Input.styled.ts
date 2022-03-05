import styled from "styled-components";

export const StyledInput = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  tab-size: 4;
  text-size-adjust: 100%;
  color: ${({ theme }) => theme.colors.paragraph};
  flex: 1;

  input {
    tab-size: 4;
    box-sizing: border-box;
    border-style: solid;
    font-family: inherit;
    margin: 0;
    color: inherit;
    appearance: none;
    background-color: #fff;
    border-width: 1px;
    padding: 0.5rem 0.75rem;
    display: block;
    width: 100%;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 4px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    &:focus {
      outline-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
