import * as React from 'react';
import styled from "styled-components";
import {Tween} from "react-gsap";
import LazyLoad from 'react-lazyload';


const CaptionStyle = styled.span`
  text-align: center;
  color: white;
  width: 100%;
  font-family: Lato, sans-serif;
  text-transform: uppercase;
  font-size: 25px;
`;

const CaptionWrapper = styled.div`
  position: absolute;
  top: 50%;
  left:50%;
`;

const RoundedBox = styled.div`
  background: linear-gradient(90deg, ${props => props.theme.strips.gradient.from} 10%, ${props => props.theme.strips.gradient.to} 90%);
  border-radius: 20px;
  position: absolute;
  width:20rem;
  left: 100%;
  color: #f7f7f7;
  text-align: center;
  transform: translate(-50%,0%);
  height: auto;
  padding:10px;
  
  @media (max-width: 768px) {
    width: 90vw;
  }
  
`;

const Caption = (props) => {
    return (
        <CaptionWrapper>
            <RoundedBox>
                <CaptionStyle>{props.caption}</CaptionStyle>
            </RoundedBox>
        </CaptionWrapper>
    );
};

export default Caption;
