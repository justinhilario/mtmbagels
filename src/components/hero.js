import React from "react";
import styled from "styled-components";

import MainCTA from "./MainCTA";

const text = {
    name: "Justin Hilario",
    subtitle: "Full-stack engineer and creative. Driven by the love of collaboration to build engaging full-stack web experiences through the lens of a creative background.",
    ctaText: "View Resume"
}

const Hero = () => {
    return (
    <>
     <MainTitle>{text.name}</MainTitle>
     <SubTitle>{text.subtitle}</SubTitle>
     <CtaLink href="https://www.google.com/">
      <MainCTA>{text.ctaText}</MainCTA>
     </CtaLink>
    </>
    )
  }

const MainTitle = styled.h1`
  font-size: 44px;
  color: rgb(38, 38, 38);
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  font-family: Helvetica Neue;
  letter-spacing: normal;
  -webkit-font-smoothing: initial;
`
const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    max-width: 720px;
    margin:0 auto;
    color: rgb(92, 92, 92);
    letter-spacing: normal;
    font-family: Helvetica Neue;
    -webkit-font-smoothing: initial;
    margin-bottom: 48px;
`
const CtaLink = styled.a`
  text-decoration: none;
  outline: none;
`
  
export default Hero