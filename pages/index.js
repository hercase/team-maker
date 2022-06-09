/* eslint-disable no-constant-condition */
import Button from "components/atoms/Button";
import Checkbox from "components/atoms/Checkbox";
import Logo from "components/atoms/Logo";
import InstallPWA from "components/molecules/InstallPWA";
import LoadingScreen from "components/molecules/LoadingScreen";
import Carousel from "components/organisms/Carousel";
import useLocalStorage from "hooks/useLocalStorage";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const Home = () => {
  const router = useRouter();
  const [introIsHidden, setIntroIsHidden] = useLocalStorage("HIDDEN-INTRO", false);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    if (introIsHidden) router.push("/create");
  }, [introIsHidden, router]);

  const navigate = () => {
    router.push("/create");
  };

  if (introIsHidden) return <LoadingScreen />;

  return (
    <StyledHome>
      <section className="flex justify-center items-center h-full">
        <Logo height={30} />
      </section>
      <Carousel />
      <section className="footer">
        <svg className="footer__divider" viewBox="0 0 147 8">
          <g transform="translate(-25.771 -143.03)">
            <path d="m25.771 147.21c44.524-13.283 97.977 10.342 148.1-0.90321v4.8173h-148.08z" />
          </g>
        </svg>
        <div className="footer__content">
          <Image alt="isotipo" src="/img/isotipo.svg" height={50} width={50} />

          <Button onClick={navigate}>Comenzar</Button>
          <InstallPWA />
          <label className="hide-intro">
            <Checkbox checked={introIsHidden} onChange={() => setIntroIsHidden(true)} />
            <small>No volver a mostrar</small>
          </label>
        </div>
      </section>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr 8rem;
  gap: 1rem;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  background-color: var(--headline);
  max-width: 1200px;
  margin: 0 auto;
  width: 95vw;
  background-color: ${(props) => props.theme.colors.headline};

  & .footer {
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 0;
    background: ${(props) => props.theme.colors.primaryDark};

    &__divider {
      position: absolute;
      width: 101%;
      fill: ${(props) => props.theme.colors.primaryDark};
      bottom: 95%;
      left: -2px;
    }

    &__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 5rem min-content;
      column-gap: 1rem;
      align-items: center;
      padding: 0 1rem;
      height: 100%;
    }
  }

  .dots {
    bottom: 3rem;

    & button {
      border-color: #2c3590 !important;
      background: white !important;
    }

    & .react-multi-carousel-dot--active button {
      background: #171f6d !important;
    }
  }

  .react-multi-carousel-track {
    height: 100% !important;
  }

  .hide-intro {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.9rem;
    color: white;
    margin: 0 auto;
  }
`;

export default Home;
