import * as React from "react";
import styled from "styled-components";
import {Tween} from "react-gsap";

const Skew = styled.div`
  -webkit-transform: skewY(-5deg);
  -moz-transform: skewY(-5deg);
  -ms-transform: skewY(-5deg);
  -o-transform: skewY(-5deg);
  transform: skewY(-5deg);
`;

const UnSkew = styled.div`
  -webkit-transform: skewY(5deg);
  -moz-transform: skewY(5deg);
  -ms-transform: skewY(5deg);
  -o-transform: skewY(5deg);
  transform: skewY(5deg);
`;

const Strip = styled.div`
  width: 100%;
  height: auto;
  min-height: 5rem;
  margin-top: -10rem;
  position: absolute;
  background: linear-gradient(90deg, ${props => props.theme.strips.gradient.from} 10%, ${props => props.theme.strips.gradient.to} 90%);
  z-index: 100;
`;

const Content = styled.div`
  padding-top: 4rem;
  text-align: center;
`;

const Title = styled.h2`

font-weight: normal;
color: ${props => props.theme.typography.strips.color};
margin: 0;

`;

const Description = styled.p`
  white-space: pre-wrap;
  width: 80%;
  margin: 5% auto;
  margin-bottom: 5rem;
  color: ${props => props.theme.typography.strips.color};
`;

export interface AngledStripProps {
    title: string;
    description: string;
}

class AngledStrip extends React.Component<AngledStripProps> {
    render() {
        return (
            <div>
                <Tween from={{y: "50px", opacity: 0}}>
                    <Skew>
                        <Strip>
                            <UnSkew>
                                <Content>
                                    <Title>
                                        {this.props.title}
                                    </Title>
                                    <Description>
                                        {this.props.description}
                                    </Description>
                                </Content>
                            </UnSkew>
                        </Strip>
                    </Skew>
                </Tween>
            </div>
        );
    }
}

export default AngledStrip;