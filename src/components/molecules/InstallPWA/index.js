import { useEffect, useState } from "react";
import styled from "styled-components";
import { ImDownload } from "react-icons/im";

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
    });

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener("transitionend", handler);
      window.removeEventListener("appinstalled", handler);
    };
  }, []);

  const handleInstall = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA || isInstalled) {
    return <div></div>;
  }
  return (
    <StyledButton onClick={handleInstall}>
      <ImDownload size={15} color="white" />
      Install PWA
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: underline;
  font-size: 0.8rem;
  color: white;
`;

export default InstallPWA;
