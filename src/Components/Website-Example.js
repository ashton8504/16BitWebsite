import React from "react";
import styled from "styled-components";

const WebsiteImage = styled.img`
  width: 100vw;
`;

function WebsiteExample({ websiteData }) {

    return(
        <>
            <WebsiteImage src={websiteData.image} alt={`${websiteData.name} main image`}/>
            <p>
                <a href={websiteData.url}>{websiteData.name}</a>
            </p>
        </>
        
    );
}

export default WebsiteExample;