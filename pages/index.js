import PropTypes from "prop-types";
import { useEffect } from "react";
import "react-multi-carousel/lib/styles.css";

import Logo from "components/Logo";
import Button from "components/Button";

import Carousel from "react-multi-carousel";
import WavyDivider from "components/WavyDivider";
import InstallPWA from "components/InstallPWA";
import styled from "styled-components";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  const navigate = () => {
    router.push("/create");
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    table: {
      breakpoint: { max: 1200, min: 850 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
    },
  };

  return (
    <StyledHome>
      <section className="flex justify-center items-center h-full">
        <Logo height={30} />
      </section>
      {/* <Carousel
        responsive={responsive}
        infinite={true}
        showDots={true}
        removeArrowOnDeviceType={["mobile", "table", "desktop"]}
        dotListClass="dots"
        containerClass="container mx-auto h-full"
        itemClass="carousel__item"
      >
        <CarrouselItem
          text="Escribe el nombre de las personas que van a participar"
          SVGIcon={FormExample}
        />
        <CarrouselItem
          text="Team Maker se encarga de mezclarlos aleatoriamente"
          SVGIcon={RandomExample}
        />
        <CarrouselItem
          text="Comparte el resultado en donde quieras"
          SVGIcon={ShareExample}
        />
      </Carousel>
      <section className="flex flex-col h-full">
        <div className="relative">
          <WavyDivider className="w-full" />
        </div>
        <div className="home__footer">
          <div className="flex items-center container mx-auto h-full md:justify-between justify-end px-12 sm:px-0">
            <Isotipo className="hidden md:block h-12" />
            <div className="flex gap-3">
              <InstallPWA />
              <Button onClick={navigate}>Comenzar</Button>
            </div>
          </div>
        </div>
      </section> */}
    </StyledHome>
  );
};

const CarrouselItem = ({ SVGIcon, text }) => (
  <>
    <div className="flex items-end justify-center h-full">
      <SVGIcon className="w-full h-auto object-cover md:w-9/12" />
    </div>
    <p className="font-sans text-center text-xl">{text}</p>
  </>
);

const StyledHome = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr 120px;
  gap: 1rem;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  background-color: var(--headline);

  .carousel__item {
    display: grid;
    grid-template-rows: 1.5fr 1fr;
    padding: 2rem;
    padding-top: 0;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 620px) {
    & {
      grid-template-rows: 100px 1fr minmax(min-content, 160px);
    }
  }

  &__footer {
    width: 100%;
    height: 100%;
    padding-bottom: 0;
    padding-top: 2rem;

    background: var(--primary-dark);
  }

  .dots {
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
`;

CarrouselItem.propTypes = {
  SVGIcon: PropTypes.any,
  text: PropTypes.any,
};

export default Home;
