/* eslint-disable @next/next/link-passhref */
import Logo from "components/atoms/Logo";
import InstallPWA from "components/molecules/InstallPWA";
import Link from "next/link";
import PropTypes from "prop-types";
import { useEffect } from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <StyledLayout>
      <div className="grid place-items-center h-full w-full bg-primaryDark shadow-xl relative">
        <Link href="/create">
          <Logo className="link" width={150} dark />
        </Link>
        <div className="absolute right-4">
          <InstallPWA />
        </div>
      </div>
      {children}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
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

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
