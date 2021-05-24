import React, { useState } from "react";
import Fade from "react-reveal";
import styled, { keyframes } from "styled-components";
import Layout from "../components/layout";
import Data from "../data/leadership.js";
import AwardData from "../data/awards.js";
import LeadershipCard from "../components/leadership-card";
import HeroBackground from "../images/about-us/vector-background.svg";
import Ether from "../images/about-us/blockchain.svg";
import StarTrek from "../images/about-us/star-trek.jpg";
import Mars from "../images/about-us/total-recall.jpg";
import Radar from "../images/about-us/radar.jpg";
import Planet from "../images/homepage/planet.svg";
import LeadershipIcon from "../images/about-us/leadership-icon.svg";
import SanDiego from "../images/about-us/san-diego.jpg";
import Arrow from "../images/arrow-right.svg";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const HeroContainer = styled.div`
  background-image: url(${HeroBackground});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;

const HeroRow = styled.div`
  display: grid;
  width: 75%;
  grid-template-columns: 1fr;
  padding: 10rem 0 90% 0;
  .eth-block {
    position: absolute;
    display: none;
    top: 120%;
    animation: ${rotation} 100s infinite;
  }
  .innerspace {
    position: relative;
  }
  .outerspace {
    position: relative;
  }
  .planet {
    position: absolute;
    width: 100%;
    padding: 4rem 0 0 0;
  }
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    padding: 15rem 0 10rem 0;
    grid-gap: 100px;
    grid-template-columns: 1fr 1fr;
    .eth-block {
      display: block;
    }
    .planet {
      padding: 0;
    }
  }
`;

const HistorySection = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  .total-recall {
    position: absolute;
    left: 5%;
    top: 25%;
    z-index: 1;
  }
`;
const HistoryRow = styled.div`
  padding: 10rem 0 10rem 12%;
  z-index: 4;
  h2 {
    padding: 0 0 2rem 0;
  }
  .our-history {
    display: flex;
    flex-flow: column;
    background: ${(props) => props.theme.secondaryColors.granite};
    padding: 5rem;
    .left-column {
    }
    .right-column {
      padding: 2rem 0 0 0;
    }
  }
  .our-history-gallery {
    display: flex;
    img {
      width: 50%;
    }
  }
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    .our-history {
      flex-flow: row;
      .right-column {
        padding: 0 0 0 5rem;
      }
    }
  }
`;

const LeadershipIntro = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .gradient-column {
    height: 50%;
    background-image: linear-gradient(
      45deg,
      ${(props) => props.theme.primaryColors.oceanBlue},
      ${(props) => props.theme.secondaryColors.orange}
    );
  }
  .leadership-icon {
    // animation: ${rotation} 25s infinite;
  }
  .leadership-column {
    background: ${(props) => props.theme.secondaryColors.granite};
    padding: 5rem;
    h2 {
      color: ${(props) => props.theme.secondaryColors.orange};
      padding: 0 0 2rem 0;
    }
    p {
      padding: 0 0 2rem 0;
    }
  }
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-template-columns: 2fr 2fr 1fr;
  }
`;

const LeadershipSection = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;
const LeadershipRow = styled.div`
  width: 75%;
  .leadership-intro {
    padding: 10rem 0 1.5rem 0;
    margin: 0 0 3rem 0;
    border-bottom: 1px solid ${(props) => props.theme.primaryColors.clearWhite};
  }
  .leadership-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 2rem;
  }
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    .leadership-cards {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 3rem 2rem;
    }
  }
`;

const AwardsIntroSection = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
  padding: ${(props) => props.theme.sectionSpacing.topOnly};
  .awards-column {
    border-top: 1px solid ${(props) => props.theme.primaryColors.clearWhite};
    border-bottom: 1px solid ${(props) => props.theme.primaryColors.clearWhite};
    border-right: 1px solid ${(props) => props.theme.primaryColors.clearWhite};
    padding: 0 0 0 25%;
    display: flex;
    .awards-description {
      padding: 5rem 5rem 5rem 0;
      h2 {
        color: ${(props) => props.theme.primaryColors.oceanBlue};
        padding: 0 0 2rem 0;
      }
    }
    .awards-image {
      background-image: url(${SanDiego});
      background-size: cover;
      width: 100%;
      display: none;
      @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
        display: block;
      }
    }
  }
`;

const AwardsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 5rem 0 10rem 0;
  .award-row {
    width: 75%;
    display: flex;
    justify-content: space-between;
    padding: 1.8rem 2rem;
    transition: ${(props) => props.theme.animationSpeeds.normal};
    p {
      padding: 5px 25px 0 0;
      color: ${(props) => props.theme.secondaryColors.stone};
      transition: ${(props) => props.theme.animationSpeeds.normal};
    }
    &:hover {
      background: ${(props) => props.theme.primaryColors.oceanBlue};
      p {
        color: ${(props) => props.theme.primaryColors.clearWhite};
      }
    }
  }
  .award-title {
    display: flex;
  }

  img {
    align-self: center;
  }
  a {
    font-size: 3.375rem;
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
`;

const ImpactSection = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  padding: ${(props) => props.theme.sectionSpacing.standard};
  background: ${(props) => props.theme.primaryColors.oceanBlue};
  .impact-row {
    width: 75%;
  }
  .impact-title {
    margin: 0 0 3rem 0;
    border-bottom: 1px solid ${(props) => props.theme.primaryColors.clearWhite};
    h2 {
      padding: 0 0 2rem 0;
    }
  }
  .impact-description {
    display: grid;
    grid-template-columns: 6fr 1fr;

    .title {
      font-size: ${(props) => props.theme.fontSize.xl.size};
      line-height: ${(props) => props.theme.fontSize.xl.lineHeight};
      font-weight: bold;
    }
    .description {
      padding: 2rem 0 0 0;
    }
  }
`;

const About = () => {
  const [leadershipData, setLeadershipData] = useState(Data);
  const [awardsData, setAwardsData] = useState(AwardData);
  return (
    <Layout>
      <HeroContainer>
        <HeroRow>
          <div className="innerspace">
            <h1>From Far Above the Earth</h1>
            <p>
              <strong>
                We see humanity’s signature just beneath the surface
              </strong>
              <br></br>ASTERRA’s view from 390 miles above the equator provides
              the perfect vantage point to see what’s happening beneath our
              world, understand what it means, and execute a response.
            </p>
            <img className="eth-block" src={Ether} />
          </div>
          <div className="outerspace">
            <img src={StarTrek} alt="To boldly go" className="planet"></img>
          </div>
        </HeroRow>
      </HeroContainer>
      <Fade>
        <HistorySection>
          <img src={Planet} alt="Total Recall" className="total-recall"></img>
          <HistoryRow>
            <h2>Our History</h2>
            <div className="our-history">
              <div className="left-column">
                <p>
                  <strong>ASTERRA’s Martian roots</strong>
                  <br></br>
                  ASTERRA’s core technology was first applied in the search for
                  underground water on Mars and other planets. Lauren Guy, the
                  atmospheric physicist and entrepreneur who developed the
                  approach, quickly recognized that if it could work out in the
                  solar system, it could be even more effective here on Earth.
                  The water was closer, the need more immediate, and the
                  technology had the potential to solve a number of critical
                  problems.
                  <br></br>
                  <br></br>
                  Mr. Guy co-founded Utilis Corporation in 2013 to develop
                  applications for the new technology. In 2016, leak detection
                  in underground water systems became the first commercially
                  used application. From an orbiting satellite, a band of the
                  radio spectrum penetrated the Earth’s surface; and an
                  algorithm, fine-tuned to detect treated drinking water,
                  revealed underground leaks as small as 0.5 liters per minute.
                </p>
              </div>
              <div className="right-column">
                <p>
                  <strong>A revolutionary change</strong>
                  <br></br>
                  For the first time, the managers of underground water
                  infrastructure could actually see the water that was leaking
                  from their systems. Not a prediction, not a likelihood, but
                  the water itself. Even in the largest cities, they could see
                  it all at once, with unheard-of speed and efficiency. Utilis
                  continued to refine the technology and expand its applications
                  beyond leak detection, adding pipe deficiency and property
                  assessment to its growing capabilities.
                  <br></br>
                  <br></br>
                  In 2021, Utilis named this family of technologies ASTERRA,
                  from Astra, Latin for stars; Asterion, the Greek river deity,
                  Terra, on which we live. Current ASTERRA products are
                  MasterPlan, Recover, and EarthWorks, for pipe assessment, leak
                  detection, and property assessment.
                </p>
              </div>
            </div>
            <div className="our-history-gallery">
              <img src={Mars} alt="Get your ass to mars."></img>
              <img src={Radar} alt="ID4"></img>
            </div>
          </HistoryRow>
        </HistorySection>
      </Fade>
      <Fade>
        <LeadershipIntro>
          <div className="gradient-column"></div>
          <div className="leadership-column">
            <h2>Our Leadership Team</h2>
            <p>
              <strong>Expertise that drives innovation</strong>
              <br></br>
              Utilis has been able to introduce trailblazing technologies like
              ASTERRA because of the strength of our leadership, combining more
              than a century of achievement in scientific research and technical
              innovation. Their expertise guides the scientists, engineers, and
              experts in geospatial sciences who are pushing our technology, and
              our company, forward.
            </p>
            <img
              src={LeadershipIcon}
              alt="Leadership wheel"
              className="leadership-icon"
            />
          </div>
          <div></div>
        </LeadershipIntro>
      </Fade>
      <Fade>
        <LeadershipSection>
          <LeadershipRow>
            <div className="leadership-intro">
              <h2>Our Leadership</h2>
            </div>
            <div className="leadership-cards">
              {leadershipData.map((value, index) => {
                if (index < 5) {
                  return (
                    <LeadershipCard
                      key={value.id}
                      profile={value}
                    ></LeadershipCard>
                  );
                }
              })}
            </div>
          </LeadershipRow>
          <LeadershipRow>
            <div className="leadership-intro">
              <h2>Our Advisors</h2>
            </div>
            <div className="leadership-cards">
              {leadershipData.map((value, index) => {
                if (index >= 5) {
                  return (
                    <LeadershipCard
                      key={value.id}
                      profile={value}
                    ></LeadershipCard>
                  );
                }
              })}
            </div>
          </LeadershipRow>
        </LeadershipSection>
      </Fade>
      <Fade>
        <AwardsIntroSection>
          <div className="awards-column">
            <div className="awards-description">
              <h2>Our Awards</h2>
              <p>
                <strong>Multiple honors in a few short years</strong>
                <br></br>
                In 2017, co-founder Lauren Guy and CEO Elly Perets traveled to
                Imagine H2O Week in San Diego, where they were presented with
                the very first Imagine H2O Data Challenge award for solutions
                that drive smarter water resource management. In the few years
                since then, we have earned more than a dozen additional awards
                and citations around the world for technical innovation and
                impact.
              </p>
            </div>
            <div className="awards-image"></div>
          </div>
          <div></div>
        </AwardsIntroSection>
      </Fade>
      <Fade>
        <AwardsSection>
          {awardsData.map((value) => {
            return (
              <div className="award-row" key={value.id}>
                <div className="award-title">
                  <p>{value.year}</p>
                  <a href={value.link}>{value.name}</a>
                </div>
                <img src={Arrow} />
              </div>
            );
          })}
        </AwardsSection>
      </Fade>
      <Fade>
        <ImpactSection>
          <div className="impact-row">
            <div className="impact-title">
              <h2>Our Impact</h2>
            </div>
            <div className="impact-description">
              <div>
                <p className="title">
                  <span className="emphasize">Seven billion</span> gallons of
                  water a year is just the beginning
                </p>
                <p className="description">
                  Since 2016, hundreds of projects have been completed
                  worldwide, in the United States, Italy, the UK, Chile, China,
                  South Africa, and elsewhere. Some 20,000 leaks have been
                  verified, saving customers 7,000 million gallons of drinkable
                  water, 17,000 MWH hours a year, and the associated
                  environmental and financial costs. It’s one of the ways we
                  support the United Nations Sustainable Development Goals
                  (SDG). As ASTERRA’s capabilities grow, so will our impact on
                  resource resilience, the environment, economics, and safety.
                </p>
              </div>
            </div>
          </div>
        </ImpactSection>
      </Fade>
    </Layout>
  );
};
export default About;
