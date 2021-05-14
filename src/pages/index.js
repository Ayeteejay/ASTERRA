import * as React from "react";
import styled, { keyframes } from "styled-components";
import Layout from "../components/layout";
import "../styles/global.css";
import VideoHero from "../images/homepage/hero-video.jpg";
import PlanetImage from "../images/homepage/planet.svg";

const Container = styled.div`
  padding: 5rem 0 0 0;
  p {
    text-align: center;
    padding: 0.75rem 0 1.5rem 0;
  }
`;

const HeroRow = styled.div`
  padding: 5rem 5rem 10rem 5rem;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Video = styled.img`
  position: absolute;
  width: 50%;
  bottom: 60%;
`;

const float = keyframes`
0%{
  transform: translate(0,0)
}
50%{
  transform:translate(0,1.5rem)
}
100%{
  transform:translate(0,0);
}
`;

const PlanetSmall = styled.img`
  position: absolute;
  max-width: 10%;
  top: 5%;
  left: 20%;
  z-index: 99;
  transition: 500ms;
  animation: ${float} 8s infinite;
`;

const PlanetLarge = styled.img`
  position: absolute;
  max-width: 20%;
  bottom: 95%;
  right: 20%;
  transition: 500ms;
  animation: ${float} 8s infinite;
`;

const ProductRow = styled.div`
  padding: 15rem 5rem 5rem 5rem;
  text-align: center;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.theme.primaryColors.oceanBlue},
    ${(props) => props.theme.secondaryColors.orange}
  );
`;

const Index = () => {
  return (
    <Layout>
      <Container>
        <HeroRow>
          <h1>
            An entire city at <span>once.</span>
          </h1>
          <p>
            <strong>
              Underground infrastructure moisture assessment, scaled to our
              largest cities.
            </strong>
            <br></br>With a radar ‘eye-print’ of 3,500 sq. km (more than 1,300
            sq. miles), ASTERRA’s satellite-based ground-penetrating synthetic
            aperture radar (SAR) can locate and analyze underground moisture
            around critical infrastructure for most of the world’s largest
            cities in a single glance.
          </p>
          <button>Request a Demo</button>
        </HeroRow>
        <ProductRow>
          <PlanetSmall src={PlanetImage}></PlanetSmall>
          <PlanetLarge src={PlanetImage}></PlanetLarge>
          <Video src={VideoHero}></Video>

          <h3>
            Patented Radar Technology for Pipe Assessment. Leak Detection.
            Property Assessment.
          </h3>
          <p>
            ASTERRA’s unique technology products provide hard intelligence and
            analysis to managers and engineers to support data-based decisions
            on large and massive-scale infrastructure.
          </p>
        </ProductRow>
      </Container>
    </Layout>
  );
};
export default Index;
