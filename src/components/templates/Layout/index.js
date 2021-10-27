import PropTypes from "prop-types";
import { forwardRef, useEffect } from "react";
import InstallPWA from "components/molecules/InstallPWA";
import Logo from "components/atoms/Logo";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);

  .capturing {
    width: 550px !important;
  }
`;

const LayoutFunction = ({ children }, ref) => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <StyledLayout ref={ref} className="layout container background">
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

LayoutFunction.propTypes = {
  children: PropTypes.any,
};

const Layout = forwardRef(LayoutFunction);

export default Layout;
