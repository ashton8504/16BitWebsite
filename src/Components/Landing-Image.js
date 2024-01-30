import React from "react";
import styled from "styled-components";

const StyledLandingImage = styled.img`
  height: 100vh;
  width: 100vw;
`;

function LandingImage() {
  return (
    <StyledLandingImage
      src="/images/other-landing-image.gif"
      alt="16 bit background for website"
    />
  );
}

export default LandingImage;
