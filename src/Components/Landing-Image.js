import React from "react";
import styled from "styled-components";

const StyledLandingImage = styled.img`
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const StyledLogo = styled.img`
  position: absolute;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  left: 45%;
  top: 35%;
`;

function LandingImage() {
  return (
    <>
      <StyledLandingImage
        src="/images/other-landing-image.gif"
        alt="16 bit background for website"
      />
      <StyledLogo src="/images/logo.png" alt="16 Bit Productions logo" />
    </>
  );
}

export default LandingImage;
