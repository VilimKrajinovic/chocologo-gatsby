import * as React from 'react';
import styled from "styled-components";
import {Link} from 'gatsby';
import "../../static/styles/bootstrap.css";

const PictureStyle = styled.div`
  padding: 0;
  margin: 10px;
  height: ${props => props.theme.pictureLinks.height};
  width: ${props => props.theme.pictureLinks.width};
  
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: ${props => props.theme.pictureLinks.minHeight};
    width: ${props => props.theme.pictureLinks.minWidth};
  }  
  
`;

const ImgStyle = styled.img`
  height: ${props => props.theme.pictureLinks.height};
  width: ${props => props.theme.pictureLinks.width};
  object-fit: cover;
  border-radius: 10px !important;
  
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: ${props => props.theme.pictureLinks.minHeight};
    width: ${props => props.theme.pictureLinks.minWidth};
  }  
  
`;

const Description = styled.p`
  font-size: ${props => props.theme.pictureLinks.description.fontSize};
  position: relative;
  top:50%;
  transform: translateY(-50%);
  
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  background: rgba(247, 119, 0, 0.2);
  color: white;
  opacity: 0;
  border-radius: 10px;
  margin: 0;
  height: ${props => props.theme.pictureLinks.height};
  width: ${props => props.theme.pictureLinks.width};
  text-align: center;
  transition: opacity 0.2s;
  
    :hover {
      opacity: 100%;
      visibility: visible;
  }
  
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    opacity: 100%;
    visibility: visible;
  }
  
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: ${props => props.theme.pictureLinks.minHeight};
    width: ${props => props.theme.pictureLinks.minWidth};
  }  
  
  
`;

const StyledDiv = styled.div`
  height: ${props => props.theme.pictureLinks.height};
  width: ${props => props.theme.pictureLinks.width};
  
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: ${props => props.theme.pictureLinks.minHeight};
    width: ${props => props.theme.pictureLinks.minWidth};
  }  
`;


const PictureLink = (props) => {
    return (
        <PictureStyle className={"col-md"}>
            <Link to={props.to}>
                <StyledDiv>
                    <DescriptionWrapper>
                        <Description>
                            {props.description}
                        </Description>
                    </DescriptionWrapper>
                    <ImgStyle src={props.src}/>
                </StyledDiv>
            </Link>
        </PictureStyle>
    );
};

export default PictureLink;