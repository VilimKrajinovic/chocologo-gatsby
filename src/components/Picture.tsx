import * as React from 'react';
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const PictureStyle = styled.div`
  padding: 0;
  margin: 10px;
  width: ${props => props.theme.pictureLinks.size};
  height: ${props => props.theme.pictureLinks.size};
`;

const ImgStyle = styled.img`
  height: ${props => props.theme.pictureLinks.size};
  width: ${props => props.theme.pictureLinks.size};
  object-fit: cover;
  border-radius: 10px !important;
`;

const Description = styled.p`
  font-size: 2.7em;
  font-family: "Century Gothic",sans-serif;
  position: relative;
  top:50%;
  transform: translateY(-100%);
  
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  background: rgba(247, 119, 0, 0.2);
  color: #ffffff;
  opacity: 0;
  border-radius: 10px;
  margin: 0;
  height: ${props => props.theme.pictureLinks.size}!important;
  width: ${props => props.theme.pictureLinks.size} !important;
  text-align: center;
  top: auto;
  transition: opacity 0.2s;
  
    :hover {
      opacity: 100%;
      visibility: visible;
  }
`;

const StyledDiv = styled.div`

  height: ${props => props.theme.pictureLinks.size} !important;
  width: ${props => props.theme.pictureLinks.size} !important;

`;

const Picture = (props) => {
    return (
        <Col md={"2"}>
            <PictureStyle>
                <StyledDiv>
                    <DescriptionWrapper>
                        <Description>
                            {props.description}
                        </Description>
                    </DescriptionWrapper>
                    <ImgStyle src={props.src}/>
                </StyledDiv>
            </PictureStyle>
        </Col>
    );
};

export default Picture;