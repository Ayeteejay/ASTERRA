import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ProductData from "../data/product.js";
import ProductCard from "../components/product-card";

import VideoHero from "../images/homepage/hero-video.jpg";
import PlanetImage from "../images/homepage/planet.svg";

// Keyframes
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
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

const Container = styled.div`
  padding: 5rem 0 0 0;
  p {
    padding: 0.75rem 0;
  }
`;

const HeroSection = styled.div`
  padding: 5rem 5rem 10rem 5rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  p {
    text-align: center;
  }
`;

const DemoLink = styled(Link)`
  background: ${(props) => props.theme.secondaryColors.orange};
  border: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: 800ms;
  padding: 1rem 1.5rem;
  border-radius: 5rem;
  text-decoration: none;
  font-size: 0.95rem;
  cursor: pointer;
  &:hover {
    background: blue;
  }
`;

const Video = styled.img`
  position: absolute;
  width: 50%;
  bottom: 5rem;
`;

const PlanetSmall = styled.img`
  position: absolute;
  max-width: 10%;
  bottom: 60%;
  left: 20%;
  z-index: 99;
  transition: 500ms;
  animation: ${float} 8s infinite;
`;

const PlanetLarge = styled.img`
  position: absolute;
  max-width: 20%;
  bottom: 10rem;
  right: 20%;
  transition: 500ms;
  animation: ${float} 8s infinite;
`;

const IntroSection = styled.div`
  padding: 10rem 5rem 5rem 5rem;
  background-size: 400%;
  animation: ${gradientAnimation} 15s infinite;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.theme.primaryColors.oceanBlue},
    ${(props) => props.theme.secondaryColors.orange}
  );
`;

const VideoRow = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const ProductRow = styled.div`
  padding: ${(props) => props.theme.sectionSpacing.standard};
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const ProductDescription = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
const ProductCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
`;

const Index = () => {
  const [productData, setProductData] = useState(ProductData);
  return (
    <Layout>
      <Container>
        <HeroSection>
          <h1>
            An entire city at <span className="gradient">once.</span>
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
          <DemoLink to="/demo">Request a Demo</DemoLink>
        </HeroSection>
        <IntroSection>
          <VideoRow>
            <PlanetSmall src={PlanetImage}></PlanetSmall>
            <PlanetLarge src={PlanetImage}></PlanetLarge>
            <Video src={VideoHero}></Video>
            <button className="cta-btn-ghost">Play Video</button>
          </VideoRow>
          <ProductRow>
            <ProductDescription>
              <h3>
                Patented Radar Technology for Pipe Assessment. Leak Detection.
                Property Assessment.
              </h3>
              <p>
                ASTERRA’s unique technology products provide hard intelligence
                and analysis to managers and engineers to support data-based
                decisions on large and massive-scale infrastructure.
              </p>
            </ProductDescription>
            <ProductCards>
              {productData.map((value) => {
                return <ProductCard key={value.id} data={value}></ProductCard>;
              })}
            </ProductCards>
          </ProductRow>
        </IntroSection>
      </Container>
    </Layout>
  );
};
export default Index;
