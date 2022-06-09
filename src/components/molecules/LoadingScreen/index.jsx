import styled from "styled-components";
import LoadingDots from "components/atoms/LoadingDots";

const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <LoadingDots />
    </StyledLoadingScreen>
  );
};

const StyledLoadingScreen = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-dark);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

export default LoadingScreen;
