import React from "react";
import styled, { keyframes } from "styled-components";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import Highway from "../images/homepage/highway.jpg";
import Cards from "../components/cards-section";

import Typography from "../components/typography-section";
import Buttons from "../components/button-section";

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

const HeroSection = styled.section`
  background: url(${Highway});
  width: 100%;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeroRow = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;

const HeroBlock = styled.div`
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
            <h1>Component Library</h1>
          </HeroBlock>
        </HeroRow>
      </HeroSection>
      {/* <Typography></Typography> */}
      <Buttons></Buttons>
      <Cards></Cards>
    </Layout>
  );
};
export default Index;
