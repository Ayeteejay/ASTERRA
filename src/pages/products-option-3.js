import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Layout from "../components/layout";
import City from "../images/products/product-hero.jpg";
import MasterPlanCollage from "../images/products/masterplan-img.png";
import RecoverCollage from "../images/products/recover-img.png";
import EarthworksCollage from "../images/products/earthworks-img.png";

import MasterPlanBackground from "../images/products/masterplan-background.jpg";
import RecoverBackground from "../images/products/recover-background.jpg";
import EarthworksBackground from "../images/products/earthworks-background.jpg";

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
  display: flex;
  flex-flow: column;
  justify-content: center;
  h2 {
    padding: 0 0 1.5rem 0;
  }
`;

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .image-col {
    background: url(${City});
    background-size: cover;
  }
  .content-col {
    padding: 4rem;
    margin: 15% 0;
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
  }
`;

const Product = styled.div`
  .product-wrapper {
    min-height: 500vh;
    transition: 1s ease-in-out;
    display: flex;
    justify-content: center;
  }
  .product-container {
    width: 100%;
    position: relative;
  }
  .product-row {
    position: sticky;
    display: grid;
    padding: 10% 0;
    grid-template-columns: 1fr 2fr;
    grid-gap: 5rem;
    transition: 1s ease-in-out;
    background-size: 125%;
    background-position: 90% 30%;
    background-repeat: no-repeat;
    top: 0;
    .content-col {
      padding: 0 0 0 10rem;
      p {
        padding: 0 0 3rem 0;
      }
    }
    .gallery-col {
    }
    .show {
      visibility: visible;
    }
  }
`;

const Products = () => {
  const [masterPlan, setMasterPlan] = useState(true);
  const [recover, setRecover] = useState(false);
  const [earthworks, setEarthworks] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    const yPos = Math.abs(currPos.y);
    const productRow = document.querySelector(".product-row");
    if (yPos > 0 && yPos < 1700) {
      productRow.style.backgroundImage = `url(${MasterPlanBackground})`;
      setRecover(false);
      setEarthworks(false);
    } else if (yPos > 1700 && yPos < 3400) {
      setMasterPlan(false);
      setRecover(true);
      productRow.style.backgroundImage = `url(${RecoverBackground})`;
    } else if (yPos > 3400) {
      productRow.style.backgroundImage = `url(${EarthworksBackground})`;
      setRecover(false);
      setEarthworks(true);
    }
    console.log(Math.abs(currPos.y));
  });
  return (
    <Layout>
      <Container>
        <Hero>
          <div className="image-col"></div>
          <div className="content-col">
            <h1>ASTERRA Products</h1>
            <p>
              <strong>
                Assess underground infrastructure and locate leaks across an
                entire system.
              </strong>
              <br></br>
              Only ASTERRA’s technology and products can deliver the wide-area
              data and visualizations that let you see and assess underground
              conditions across entire potable or wastewater systems or the most
              expansive properties. With ASTERRA, you can see every problem at
              once, evaluate its severity, and set your priorities using
              complete and solid intelligence.
            </p>
          </div>
        </Hero>
        <Product>
          <div className="product-wrapper">
            <div className="product-container">
              <div className="product-row">
                <div className="content-col">
                  <h2
                    style={{
                      color: recover
                        ? "#002bff"
                        : earthworks
                        ? "#13cca8"
                        : "#ff4d1d",
                    }}
                  >
                    {recover
                      ? "Recover"
                      : earthworks
                      ? "EarthWorks"
                      : "MasterPlan"}
                  </h2>
                  <p>
                    <strong>Lorem ipsum dolor sit amet</strong>
                    <br></br>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit.
                  </p>
                  <a
                    href="/"
                    className={
                      recover
                        ? "primary-btn-blue"
                        : earthworks
                        ? "primary-btn-lime"
                        : "primary-btn-orange"
                    }
                  >
                    Learn More
                  </a>
                </div>
                <div className="gallery-col">
                  <img
                    src={
                      recover
                        ? RecoverCollage
                        : earthworks
                        ? EarthworksCollage
                        : MasterPlanCollage
                    }
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </Product>
      </Container>
    </Layout>
  );
};
export default Products;
