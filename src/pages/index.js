import React from "react";
import styled, { keyframes } from "styled-components";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import LeadershipBackground from "../images/about-us/orange-glow.svg";
import Highway from "../images/homepage/highway.jpg";

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
const glow = keyframes`
0% {
  background-position: 0% 0%;
}
50% {
  background-position: 15% 0%;
}
100% {
  background-position: 0% 0%;
}
`;

const HeroSection = styled.section`
  background: url(${Highway});
  width: 100%;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
`;

const HeroRow = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: auto;
  grid-template-areas: "hero";
`;

const HeroBlock = styled.div`
  grid-area: hero;
  width: 100%;
  padding: 4rem;
  margin: 4rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  background-size: 400%;
  animation: ${gradientAnimation} 15s infinite;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.theme.primaryColors.oceanBlue},
    ${(props) => props.theme.secondaryColors.orange}
  );
`;

const IntroSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-size: 400%;
  animation: ${gradientAnimation} 15s infinite;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.theme.primaryColors.oceanBlue},
    ${(props) => props.theme.secondaryColors.orange}
  );
`;

const IntroRow = styled.div`
  width: 80%;
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
`;

const ProductSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  // background-size: 200%;
  // background-repeat: no-repeat;
  // background-image: url(${LeadershipBackground});
  // animation: ${glow} 5s infinite;
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    padding: 8rem 0;
  }
`;

const ProductRow = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  grid-template-areas:
    "intro"
    "play"
    "masterplan"
    "recover"
    "earthworks";
  .block-style {
    border: 1px solid #5d5d5d;
    padding: 2.5rem;
    transition: 500ms;
    cursor: pointer;
    h4 {
      transition: 500ms;
    }
  }
  p {
    padding: 1rem 0 0 0;
    transition: 500ms;
  }
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-template-columns: 1fr 2fr 2fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0;
    grid-template-areas:
      "intro intro recover ."
      "play masterplan . earthworks";
  }
`;
const IntroBlock = styled.div`
  grid-area: intro;
  padding: 3rem;
`;
const RecoverBlock = styled.div`
  grid-area: recover;
  &:hover {
    border: 1px solid ${(props) => props.theme.primaryColors.oceanBlue};
    p,
    h4 {
      color: ${(props) => props.theme.primaryColors.oceanBlue};
    }
  }
`;
const PlayBlock = styled.div`
  grid-area: play;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-size: 400%;
  transition: 1000ms;
  // animation: ${gradientAnimation} 5s infinite;
  background-image: linear-gradient(
    15deg,
    ${(props) => props.theme.primaryColors.oceanBlue},
    ${(props) => props.theme.secondaryColors.orange}
  );
  p {
    padding: 0;
  }
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    height: 35%;
  }
  &:hover {
    background-position: 100% 0%;
  }
`;
const MasterplanBlock = styled.div`
  grid-area: masterplan;
  &:hover {
    border: 1px solid ${(props) => props.theme.secondaryColors.orange};
    p,
    h4 {
      color: ${(props) => props.theme.secondaryColors.orange};
    }
  }
`;
const EarthworksBlock = styled.div`
  grid-area: earthworks;
  &:hover {
    border: 1px solid ${(props) => props.theme.secondaryColors.lime};
    p,
    h4 {
      color: ${(props) => props.theme.secondaryColors.lime};
    }
  }
`;

const ResourceSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  background-size: 200%;
  background-repeat: no-repeat;
  background-image: url(${LeadershipBackground});
  animation: ${glow} 5s infinite;
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    padding: 8rem 0;
  }
`;

const ResourceSectionRow = styled.div`
  width: 80%;
  h2 {
    padding: 0 0 1.5rem 0;
  }
  .resources-title {
    border-bottom: 1px solid #5d5d5d;
  }
  .resource-card-style {
    p {
      padding: 1rem 0 0 0;
    }
    padding: 3rem;
    cursor: pointer;
    transition: 500ms;
    &:hover {
      background: ${(props) => props.theme.primaryColors.oceanBlue};
    }
  }
  .cta-link {
    padding: 1rem 0 0 0;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const ResourceCards = styled.div`
  padding: 5rem 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-template-areas:
    "featured"
    "resourceOne"
    "resourceTwo"
    "resourceThree"
    "resourceFour";
  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-template-areas:
      "featured featured"
      "resourceOne resourceTwo"
      "resourceThree resourceFour";
  }
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1.5fr 1fr 1fr;
    grid-template-areas:
      "featured resourceOne resourceTwo"
      "featured resourceThree resourceFour";
  }
`;
const FeaturedCard = styled.div`
  grid-area: featured;
  background-size: 300%;
  transition: 1000ms;
  cursor: pointer;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  // animation: ${gradientAnimation} 8s infinite;
  background-image: linear-gradient(
    150deg,
    ${(props) => props.theme.primaryColors.oceanBlue},
    ${(props) => props.theme.secondaryColors.orange}
  );
  p {
    padding: 1rem 0 0 0;
  }
  .featured {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
    opacity: 0.6;
  }
  &:hover {
    background-position: 90% 50%;
  }
`;

const StandardCard = styled.div`
  grid-area: resourceOne;
`;
const StandardCardTwo = styled.div`
  grid-area: resourceTwo;
`;
const StandardCardThree = styled.div`
  grid-area: resourceThree;
`;
const StandardCardFour = styled.div`
  grid-area: resourceFour;
`;

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ASTERRA</title>
      </Helmet>
      <HeroSection>
        <HeroRow>
          <HeroBlock>
            <h1>From Far Above the Earth</h1>
            <p>
              <strong>
                We see humanity’s signature just beneath the surface
              </strong>
              <br></br>
              ASTERRA’s view from 390 miles above the equator provides the
              perfect vantage point to see what’s happening beneath our world,
              understand what it means, and execute a response.
            </p>
          </HeroBlock>
        </HeroRow>
      </HeroSection>
      <ProductSection>
        <ProductRow>
          <IntroBlock>
            <h3>
              Patented Radar Technology for Pipe Assessment. Leak Detection.
              Property Assessment.
            </h3>
            <p>
              ASTERRA’s unique technology products provide hard intelligence and
              analysis to managers and engineers to support data-based decisions
              on large and massive-scale infrastructure.
            </p>
          </IntroBlock>
          <RecoverBlock className="block-style">
            <h4>Recover</h4>
            <p>
              Supports leak detection and analysis for potable, waste, and
              reclaimed water systems to support fast, efficient remediation
              with vastly reduced use of ground crews
            </p>
          </RecoverBlock>
          <PlayBlock>
            <p>Play Video</p>
          </PlayBlock>
          <MasterplanBlock className="block-style">
            <h4>MasterPlan</h4>
            <p>
              Assesses underground pipe deficiencies so replacement decisions
              and long-term planning can made with a full view of the system
            </p>
          </MasterplanBlock>
          <EarthworksBlock className="block-style">
            <h4>EarthWorks</h4>
            <p>
              Gives property owners, managers, and ground engineers accurate
              underground moisture assessments to spot potential damage and
              failure locations before serious problems occur
            </p>
          </EarthworksBlock>
        </ProductRow>
      </ProductSection>
      {/* Resources */}
      <ResourceSection>
        <ResourceSectionRow>
          <div className="resources-title">
            <h2>Resources</h2>
          </div>
          <ResourceCards>
            <FeaturedCard>
              <p className="featured">featured</p>
              <div className="description">
                <h3>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
              </div>
            </FeaturedCard>
            <StandardCard className="resource-card-style">
              <h4>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </p>
              <p className="cta-link">Read More</p>
            </StandardCard>
            <StandardCardTwo className="resource-card-style">
              <h4>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </p>
              <p className="cta-link">Watch Video</p>
            </StandardCardTwo>
            <StandardCardThree className="resource-card-style">
              <h4>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </p>
              <p className="cta-link">Download Whitepaper</p>
            </StandardCardThree>
            <StandardCardFour className="resource-card-style">
              <h4>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </p>
              <p className="cta-link">Read More</p>
            </StandardCardFour>
          </ResourceCards>
        </ResourceSectionRow>
      </ResourceSection>
    </Layout>
  );
};
export default Index;
