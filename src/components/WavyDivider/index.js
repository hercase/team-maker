import styled from "styled-components";

const StyledDivider = styled.svg`
  position: absolute;
  height: 134px;
  width: 100%;
  background: #2c3e50;
  bottom: 0;

  .wave::before,
  .wave::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
  }

  .wave::before {
    width: 55%;
    height: 109%;
    background-color: red;
    right: -1.5%;
    top: 60%;
  }
  .wave::after {
    width: 55%;
    height: 100%;
    background-color: #2c3e50;
    left: -1.5%;
    top: 40%;
  }
`;

const WavyDivider = (props) => {
  return (
    <StyledDivider
      version="1.1"
      viewBox="0 0 148.1 8.0957"
      xmlns="http://www.w3.org/2000/svg"
      fill="#171F6D"
      {...props}
    >
      <g transform="translate(-25.771 -143.03)">
        <path d="m25.771 147.21c44.524-13.283 97.977 10.342 148.1-0.90321v4.8173h-148.08z" />
      </g>
    </StyledDivider>
  );
};

export default WavyDivider;
