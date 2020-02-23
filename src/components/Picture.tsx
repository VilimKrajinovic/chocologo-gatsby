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
  
  position: relative;
  top:50%;
  transform: translateY(-100%);
  
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  background: rgba(247, 119, 0, 0.2);
  color: #ffffff;
  opacity: 0%;
  border-radius: 10px;
  margin: 0;
  height: 300px !important;
  width: 300px !important;
  text-align: center;
  transform: translateY(-304px);
  transition: opacity 0.2s;
  
    :hover {
      opacity: 100%;
      visibility: visible;
  }
`;

const StyledDiv = styled.div`

  height: 300px !important;
  width: 300px !important;

`;

const Picture = (props) => {
    return (
        <Col md={"2"}>
            <PictureStyle>
                <StyledDiv>
                    <ImgStyle src={props.src}/>
                    <DescriptionWrapper>
                        <Description>
                            {props.description}
                        </Description>
                    </DescriptionWrapper>
                </StyledDiv>
            </PictureStyle>
        </Col>
    );
};

export default Picture;