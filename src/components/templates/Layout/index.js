/* eslint-disable @next/next/link-passhref */
import Logo from "components/atoms/Logo";
import InstallPWA from "components/molecules/InstallPWA";
import Link from "next/link";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { StyledLayout } from "./Layout.styled";

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

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
