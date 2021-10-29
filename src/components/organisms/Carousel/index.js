import ReactCarousel from "react-multi-carousel";
import styled from "styled-components";
import Image from "next/image";
import useWindowSize from "hooks/useWindowSize";

const Carousel = () => {
  const [screenWidth] = useWindowSize();

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
    <ReactCarousel
      responsive={responsive}
      infinite={true}
      showDots={false}
      removeArrowOnDeviceType={["mobile", "table", "desktop"]}
      ssr={true}
      autoPlay={screenWidth < 1200}
    >
      <CarrouselItem>
        <Image alt="first-slide" src="/img/slide-1.svg" width={250} height={250} />
        <span>Escribe el nombre de las personas que van a participar</span>
      </CarrouselItem>

      <CarrouselItem>
        <Image alt="second-slide" src="/img/slide-2.svg" width={250} height={250} />
        <span>Team Maker se encarga de mezclarlos aleatoriamente</span>
      </CarrouselItem>

      <CarrouselItem>
        <Image alt="third-slide" src="/img/slide-3.svg" width={250} height={250} />
        <span>Comparte el resultado en donde quieras</span>
      </CarrouselItem>
    </ReactCarousel>
  );
};

const CarrouselItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  height: 100%;
  width: 90%;
  margin: 0 auto;

  span {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    font-style: italic;
  }
`;

export default Carousel;
