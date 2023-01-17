import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';

const Header = () => {
    return (
        <>
        <Link to='/'>
          HOME
        </Link>
        <Link to='/founders'>
          FOUNDERS
        </Link>
        <CtaLink href="https://www.instagram.com/meanttomakebagels/">
          INSTAGRAM
        </CtaLink>
        <CtaLink href='mailto:melanielynnordonez@gmail.com'>
          CONTACT US
        </CtaLink>
        </>
    )
  }
  const CtaLink = styled.a`
  text-decoration: none;
  outline: none;
`

export default Header