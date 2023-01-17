import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"


import MainCTA from "./MainCTA";

const text = {
    name: "MEANT TO MAKE BAGELS",
    subtitle: "A bagel moment in San Diego. Boiled then baked bagels. Plant-based schmear 🌱",
    ctaText: "Follow Us"
}

const Hero = () => {
    return (
    <>
    <HeroWrapper>
      <MainTitle>{text.name}</MainTitle>
      <SubTitle>{text.subtitle}</SubTitle>
      <CtaLink href="https://www.instagram.com/meanttomakebagels/"/>
      <StaticImage src="../images/HeroImage.jpeg" alt="Bagel Background" />
    </HeroWrapper>
    </>
    )
  }

const HeroWrapper= styled.div`
`

const MainTitle = styled.h1`
  font-size: 44px;
  color: #6B8F71;
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
    color: #6B8F71;
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