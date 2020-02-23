import * as React from 'react';
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const PictureStyle = styled.div`
  padding: 0;
  margin: 10px;
  width: 300px;
  height: 300px;
`;

const ImgStyle = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 10px !important;
`;

const Description = styled.p`
  font-size: 2.7em;
  font-family: "Century Gothic",sans-serif;
  margin: 150px 0 0;
  transform: translateY(-50%);
  &:hover{
    color:red;
  }
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  background: red;
  color: #ffffff;
  opacity: 100%;
  border-radius: 10px;
  margin: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 300px;
  width: 300px;
  text-align: center;
  vertical-align: center;
  transition: opacity 0.2s, visibility 0.2s;
  
    &:hover {
      opacity: 100%;
      color: red;
      background: blue;
      visibility: visible;
  }
`;

const Picture = (props) => {
    return (
        <Col md={"2"}>
            <PictureStyle>
                <ImgStyle src={props.src}/>
                <Description>
                    {props.description}
                </Description>
                <DescriptionWrapper>
                </DescriptionWrapper>
            </PictureStyle>
        </Col>
    );
};

export default Picture;