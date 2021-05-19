import React from "react";
import styled, { keyframes } from "styled-components";
import Layout from "../components/layout";

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

const Container = styled.div`
  padding: 15rem 5rem;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.primaryColors.oceanBlue},
    ${(props) => props.theme.secondaryColors.orange}
  );
  background-size: 400%;
  animation: ${gradientAnimation} 15s infinite;
`;

const Partners = () => {
  return (
    <Layout>
      <Container>
        <h1>Partners</h1>
        <p>Stuff about the partners goes here.</p>
      </Container>
    </Layout>
  );
};
export default Partners;
