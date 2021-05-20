import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import HeroBackground from "../images/about-us/vector-background.svg";
import StarTrek from "../images/about-us/star-trek.jpg";

const HeroContainer = styled.div`
  background-image: url(${HeroBackground});
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;

const HeroRow = styled.div`
  width: 75%;
  padding: 15rem 0 12rem 0;
  display: grid;
  grid-gap: 100px;
  grid-template-columns: 1fr 1fr;
  .innerspace {
  }
  .outerspace {
    position: relative;
    img {
      position: absolute;
      width: 100%;
    }
  }
`;

const HistorySection = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;
const HistoryRow = styled.div`
  width: 75%;
  padding: 10rem 0;
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
          </div>
          <div className="outerspace">
            <img src={StarTrek} alt="To boldly go"></img>
          </div>
        </HeroRow>
      </HeroContainer>
      <HistorySection>
        <HistoryRow>
          <h2>Our History</h2>
        </HistoryRow>
      </HistorySection>
    </Layout>
  );
};
export default About;
