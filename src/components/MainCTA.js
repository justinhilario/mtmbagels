import React from "react";
import styled from "styled-components";

const MainCTA = () => {
    return (
    <>
        <PrimaryButton/>
    </>
    )
  }


const PrimaryButton = styled.div`
    border-radius: 6px;
    padding: 12px 24px;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    font-family: Helvetica Neue;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 24px;
    white-space: nowrap;
    cursor: pointer;
    background: #3c5b97;
    font-color: white;
    font-size: 16px;
`
export default MainCTA