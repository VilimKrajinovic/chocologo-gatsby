import * as React from 'react';
import styled from 'styled-components'

const BackgroundImageStyle = styled.div`
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${props => props.theme.backgroundImages.height};
  min-height: 100%;
  background-image: url(${props => props.img});
  z-index: -1000;
`;


const FixedBackground = (props) => {
    return (
        <div>
            <BackgroundImageStyle img={props.img}>
                {props.children}
            </BackgroundImageStyle>
        </div>
    );
};

export default FixedBackground;