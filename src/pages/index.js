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

const Container = styled.div`
  padding: 5rem 0 0 0;
  p {
    padding: 0.75rem 0;
  }
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
        <ProductRow>
          <ProductDescription>
            <h3>
              Patented Radar Technology for Pipe Assessment. Leak Detection.
              Property Assessment.
            </h3>
            <p>
              ASTERRA’s unique technology products provide hard intelligence and
              analysis to managers and engineers to support data-based decisions
              on large and massive-scale infrastructure.
            </p>
          </ProductDescription>
          <ProductCards>
            {productData.map((value) => {
              return <ProductCard key={value.id} data={value}></ProductCard>;
            })}
          </ProductCards>
        </ProductRow>
      </Container>
    </Layout>
  );
};
export default Index;
