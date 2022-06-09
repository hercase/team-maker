import styled from "styled-components";

const Dots = styled.div`
  margin: 0 auto;
  text-align: center;

  & > div {
    width: 6px;
    height: 6px;
    background-color: var(--secondary);

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out both;
    animation: bouncedelay 1.4s infinite ease-in-out both;
  }

  & .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  & .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @keyframes bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const LoadingDots = (props) => {
  return (
    <Dots {...props}>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </Dots>
  );
};

export default LoadingDots;
