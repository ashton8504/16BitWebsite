import React from "react";
import styled from "styled-components";
import WebsiteExample from "./Website-Example";

const websitesArray = [
  {
    name: "Grateful Dead Setlists",
    url: "https://google.com",
    image: "images/graefulArt.jpg",
  },
  {
    name: "Grateful Dead Setlists",
    url: "https://google.com",
    image: "images/graefulArt.jpg",
  },
  {
    name: "Grateful Dead Setlists",
    url: "https://google.com",
    image: "images/graefulArt.jpg",
  },
  {
    name: "Grateful Dead Setlists",
    url: "https://google.com",
    image: "images/graefulArt.jpg",
  },
  {
    name: "Grateful Dead Setlists",
    url: "https://google.com",
    image: "images/graefulArt.jpg",
  },
  {
    name: "Grateful Dead Setlists",
    url: "https://google.com",
    image: "images/graefulArt.jpg",
  },
];

const WebsitesContainer = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  width: 100vw;
`;

function ExampleWebsites() {
  return (
    <WebsitesContainer>
      {websitesArray.map((website) => (
        <WebsiteExample websiteData={website} />
      ))}
    </WebsitesContainer>
  );
}

export default ExampleWebsites;
