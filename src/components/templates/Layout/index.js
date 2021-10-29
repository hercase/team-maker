import PropTypes from "prop-types";
import { useEffect } from "react";
import InstallPWA from "components/molecules/InstallPWA";
import Logo from "components/atoms/Logo";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  max-width: 1200px;
  margin: 0 auto;
  width: 95vw;

  .capturing {
    width: 550px !important;
  }
`;

const Layout = ({ children }) => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <StyledLayout className="layout container background">
      <div className="grid place-items-center h-full w-full bg-primaryDark shadow-xl relative">
        <Logo width={150} dark />
        <div className="absolute right-4">
          <InstallPWA />
        </div>
      </div>
      {children}
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
