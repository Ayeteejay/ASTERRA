import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ProductData from "../data/product.js";
import SolutionsData from "../data/solutions.js";
import SolutionsCard from "../components/solution-card.jsx";
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

const HeroSection = styled.section`
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

const IntroSection = styled.section`
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
  width: 75%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
const ProductCards = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`;

const TechnologySection = styled.section`
  display: flex;
  justify-content: center;
  padding: ${(props) => props.theme.sectionSpacing.standard};
`;
const TechnologyRow = styled.div`
  .technology-intro {
    display: grid;
    grid-template-columns: 1fr;
    padding: 2rem;
    h2 {
      font-size: 1.5rem;
      grid-area: tech-title;
    }
  }
  .technology-wrapper {
    display: grid;
    grid-template-columns: 1fr;
  }
  .technology-description {
    grid-area: technology;
    background: ${(props) => props.theme.primaryColors.clearWhite};
    display: grid;
    padding: 3rem 2rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
    color: ${(props) => props.theme.primaryColors.spaceBlack};
    .left-side {
      grid-area: left;
    }
    .right-side {
      grid-area: right;
    }
  }
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    .technology-description {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: "left right .";
      grid-template-rows: auto;
      padding: 3rem 0 3rem 3rem;
      grid-gap: 2.5rem;
    }
    .technology-wrapper {
      grid-template-columns: 1fr 4fr;
      grid-template-areas: ". technology";
    }
    .technology-intro {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: ". tech-title .";
      h2 {
        font-size: 3.375rem;
      }
    }
  }
`;

const SolutionsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  background: ${(props) => props.theme.primaryColors.clearWhite};
  color: ${(props) => props.theme.primaryColors.spaceBlack};
`;
const SolutionsRow = styled.div`
  width: 75%;
  .solutions-intro {
    padding: 10rem 0 0 0;
    margin: 0 0 3rem 0;
    border-bottom: 1px solid ${(props) => props.theme.primaryColors.spaceBlack};
  }
  .solutions-cards {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    .solutions-cards {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const Index = () => {
  const [productData, setProductData] = useState(ProductData);
  const [solutionData, setSolutionData] = useState(SolutionsData);
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
        <TechnologySection>
          <TechnologyRow>
            <div className="technology-intro">
              <h2>
                What Disinguishes <span className="gradient">ASTERRA</span>
                Technology
              </h2>
            </div>
            <div className="technology-wrapper">
              <div className="technology-description">
                <div className="left-side">
                  <p>
                    <span className="subheader">
                      Only ASTERRA Shows You the Moisture Itself
                    </span>
                    <br></br>Rather than rely on predictive or theoretical
                    analysis, we use ground-penetrating SAR technology to
                    actually to see the moisture accumulating beneath and around
                    infrastructure.
                  </p>
                  <p>
                    <span className="subheader">
                      Patented Algorithms Process and Analyze Data
                    </span>
                    <br></br>ASTERRA algorithms are fine-tuned to analyzes the
                    moisture’s characteristics. It will distinguish treated
                    drinking water, reclaimed, and wastewater. Resistivity can
                    also be determined.
                  </p>
                </div>
                <div className="right-side">
                  <p>
                    <span className="subheader">
                      No Capital Spending Needed
                    </span>
                    <br></br>
                    ASTERRA works without the cost of sensors or grounds crews
                    digging holes.
                  </p>
                  <p>
                    <span className="subheader">Data Integrates Easily</span>
                    <br></br>
                    ASTERRA data is easily viewed through all standard
                    geographic information system (GIS)-based platforms.
                  </p>
                  <p>
                    <span className="subheader">
                      Expansive Geographic Reach
                    </span>
                    <br></br>
                    ASTERRA can assess the underground systems in a 3,500 sq.
                    km. area, or 59 km of straight road or rail in a single
                    pass.
                  </p>
                </div>
              </div>
            </div>
          </TechnologyRow>
        </TechnologySection>
        <SolutionsSection>
          <SolutionsRow>
            <div className="solutions-intro">
              <h2>Solutions</h2>
            </div>
            <div className="solutions-cards">
              {solutionData.map((value, index) => {
                return (
                  <SolutionsCard
                    key={value.id}
                    solution={value}
                  ></SolutionsCard>
                );
              })}
            </div>
          </SolutionsRow>
        </SolutionsSection>
      </Container>
    </Layout>
  );
};
export default Index;
