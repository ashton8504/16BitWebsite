import Header from "../Components/Header.js";
import LandingImage from "../Components/Landing-Image.js";
import ExampleWebsites from "../Components/Example-Websites.js";
import About from "../Components/About.js";
import ContactUs from "../Components/Contact-Us.js";
import Footer from "../Components/Footer.js";
import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <HomeContainer>
      <Header />
      <LandingImage />
      <ExampleWebsites />
      <About />
      <ContactUs />
      <Footer />
    </HomeContainer>
  );
}

export default Home;
