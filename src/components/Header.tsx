import * as React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`

width: 100%;
height: 100vh;
position: relative;
display: grid;
grid-template-rows: max-content 1fr;
grid-template-columns: 1fr max-content;

`;

const HeaderTitle = styled.h1`
  grid-area: 2/1/2/3;
  align-self: center;
  justify-self: center;
  margin: -5rem 0 0;
  
  color: ${props => props.theme.typography.heading.color};
  font-size: ${props => props.theme.typography.heading.fontSize};
  font-weight: normal;
  font-family: Riesling, sans-serif;
  text-shadow: 0 2px 4px rgba(0,0,0,0.4);
  
    @media (max-width: 768px) {
    font-size: 15vw;
  }
  
`;

const HeaderDescription = styled.p`
  font-size: ${props => props.theme.typography.heading.description.fontSize};
  font-weight: normal;
  align-self: center;
  justify-self: center;
  color: ${props => props.theme.typography.heading.color};
  grid-area: 2/1/2/3;
  margin: 0;
  padding-top: 3vh;
  
  @media (max-width: 768px) {
    font-size: 3vw;
  }
  
`;

const HeaderBackground = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.img});
  filter: brightness(50%);
  position: absolute;
  background-attachment: fixed;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  z-index: -1;
`;

export interface HeaderProps {
    title: string;
    description: string;
    img: string;
}

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <HeaderDiv>
                <HeaderBackground img={this.props.img}/>
                <HeaderTitle>{this.props.title}</HeaderTitle>
                <HeaderDescription>{this.props.description}</HeaderDescription>
            </HeaderDiv>
        );
    }
}

export default Header;
