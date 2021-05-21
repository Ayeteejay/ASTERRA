import React, { useState } from "react";
import Fade from "react-reveal";
import styled, { keyframes } from "styled-components";
import Layout from "../components/layout";
import HeroBackground from "../images/about-us/vector-background.svg";
import Ether from "../images/about-us/blockchain.svg";
import StarTrek from "../images/about-us/star-trek.jpg";
import Mars from "../images/about-us/total-recall.jpg";
import Radar from "../images/about-us/radar.jpg";
import Planet from "../images/homepage/planet.svg";
import LeadershipIcon from "../images/about-us/leadership-icon.svg";

const HeroContainer = styled.div`
  background-image: url(${HeroBackground});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
  grid-template-columns: 1fr;
  .gradient-column {
    height: 50%;
    background-image: linear-gradient(
      45deg,
      ${(props) => props.theme.primaryColors.oceanBlue},
      ${(props) => props.theme.secondaryColors.orange}
    );
  }
  .leadership-icon {
    animation: ${rotation} 25s infinite;
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
`;

const About = () => {
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
            <h2>Our Leadership</h2>
          </LeadershipRow>
        </LeadershipSection>
      </Fade>
    </Layout>
  );
};
export default About;
